import {Button, Dropdown, GrowlMessage, Heading, Image, StackPanel} from '@uif-js/component';
import {ContextType, Decorator, ImageMetadata, PureComponent, UserMessageService} from '@uif-js/core';
import {Action} from '../../app/Action';

export default class FlightPage extends PureComponent {
	private flight;
	private boardingInfo;
	private activeGates;
	private mapPath;

	constructor(props, context) {
		super(props, context);
		const {flights, gates, flightID} = this.props;
		this.flight = flights.data.toArray().find((item) => item.id.toString() === flightID);
		this.boardingInfo = this.getGateNumber(this.flight);
		this.activeGates = gates.data.filter((gate) => gate.active === true);
		const {origin, destination} = this.flight;
		if (origin.code === 'BCN') {
			this.mapPath = this.getMapFromBCN(origin.code, destination.code);
		} else {
			this.mapPath = this.getMapFromElsewhere(origin.code, destination.code);
		}
	}

	private getGateNumber({gateNumber, boardingStatus}) {
		return this.flight.gateNumber.label ? `Gate ${gateNumber.label} - ${boardingStatus}` : 'Gate not assigned';
	}

	private getMapFromBCN(origin, destination) {
		return `/spa-app/com.netsuite.airport360/airport/assets/maps/${origin}-${destination}.png`;
	}

	private getMapFromElsewhere(origin, destination) {
		return `/spa-app/com.netsuite.airport360/airport/assets/maps/${destination}-${origin}.png`;
	}

	private async changeGate(gate) {
		const dispatch = this.context[ContextType.DISPATCH];
		dispatch(Action.flightsUpdate(this.props.flightID - 1, gate));
		const messaging = this.context[ContextType.MESSAGING];
		messaging.info({
			title: 'Gate Assigned',
			content: `Gate ${gate} has been assigned to flight  ${this.flight.flightNumber} `,
			displayType: UserMessageService.DisplayType.GROWL,
			type: GrowlMessage.Type.WARNING,
			duration: 2000,
		});
		this.boardingInfo = `Gate ${gate} - ${this.flight.boardingStatus} `;
	}

	render() {
		const navigator = this.context[ContextType.ROUTER_NAVIGATION];
		return (
			<StackPanel.Vertical
				outerGap={StackPanel.GapSize.MEDIUM}
				decorator={Decorator.custom({
					shape: Decorator.Shape.ROUNDED_SMALL,
					depth: Decorator.Depth.MEDIUM,
				})}
			>
				<StackPanel.Item>
					<Button
						label={'< Back'}
						action={() => {
							navigator.back();
						}}
						size={Button.Size.SMALL}
					/>
				</StackPanel.Item>
				<StackPanel.Item>
					<StackPanel.Vertical>
						<StackPanel.Item>
							<Heading type={Heading.Type.PAGE_TITLE}>Flight {this.props.flightID}</Heading>
						</StackPanel.Item>
						<StackPanel.Item>
							<Heading type={Heading.Type.PAGE_SUBTITLE}>Details Page</Heading>
						</StackPanel.Item>
					</StackPanel.Vertical>
				</StackPanel.Item>
				<StackPanel.Item>
					<StackPanel itemGap={StackPanel.GapSize.LARGE}>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading type={Heading.Type.MEDIUM_HEADING}>Origin</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Heading type={Heading.Type.LARGE_HEADING}>
										{this.flight.origin.name} - {this.flight.origin.code}
									</Heading>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading type={Heading.Type.MEDIUM_HEADING}>Destination</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Heading type={Heading.Type.LARGE_HEADING}>
										{this.flight.destination.name} - {this.flight.destination.code}
									</Heading>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
					</StackPanel>
				</StackPanel.Item>
				<StackPanel.Item>
					<StackPanel
						justification={StackPanel.Justification.SPACE_EVENLY}
						itemGap={StackPanel.GapSize.LARGE}
						alignment={StackPanel.Alignment.START}
						decorator={Decorator.custom({
							background: {
								color: Decorator.Color.THEMED,
								strength: Decorator.Strength.LIGHTEST,
							},
							shape: Decorator.Shape.ROUNDED_SMALL,
							depth: Decorator.Depth.SMALL,
						})}
					>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading type={Heading.Type.MEDIUM_HEADING}>Status</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Heading type={Heading.Type.LARGE_HEADING}>{this.flight.status}</Heading>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading type={Heading.Type.MEDIUM_HEADING}>Boarding</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Heading type={Heading.Type.LARGE_HEADING}>{this.boardingInfo}</Heading>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading type={Heading.Type.MEDIUM_HEADING}>Change Gate</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Dropdown
										dataSource={this.activeGates}
										valueMember={'id'}
										displayMember={'gateNumber'}
										noDataMessage='No gates are open!'
										on={{
											[Dropdown.Event.SELECTED_ITEM_CHANGED]: ({currentText}) => {
												this.changeGate(currentText);
											},
										}}
									/>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
					</StackPanel>
				</StackPanel.Item>
				<StackPanel.Item>
					<StackPanel justification={StackPanel.Justification.SPACE_EVENLY}>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Flight Number</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>
												{this.flight.flightNumber}
											</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Airline</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>{this.flight.airline}</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Departure Time</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>
												{this.flight.departure}
											</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Arrival Time</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>{this.flight.arrival}</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>

						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Altitude</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>
												{this.flight.altitude + ' ft'}
											</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
								<StackPanel.Item>
									<StackPanel.Vertical>
										<StackPanel.Item>
											<Heading>Speed</Heading>
										</StackPanel.Item>
										<StackPanel.Item>
											<Heading type={Heading.Type.MEDIUM_HEADING}>
												{this.flight.speed + ' mph'}
											</Heading>
										</StackPanel.Item>
									</StackPanel.Vertical>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>

						<StackPanel.Item>
							<StackPanel.Vertical>
								<StackPanel.Item>
									<Heading>Flight Map</Heading>
								</StackPanel.Item>
								<StackPanel.Item>
									<Image
										size={{height: 613, width: 1065}}
										image={ImageMetadata.withUrl(this.mapPath)}
									/>
								</StackPanel.Item>
							</StackPanel.Vertical>
						</StackPanel.Item>
					</StackPanel>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION, ContextType.MESSAGING];
}
