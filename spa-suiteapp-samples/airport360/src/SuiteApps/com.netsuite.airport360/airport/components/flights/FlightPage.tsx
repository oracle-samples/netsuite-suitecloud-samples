import {
	ApplicationHeader,
	Dropdown,
	GridPanel,
	GrowlMessage,
	Image,
	Portlet,
	StackPanel,
	Text,
} from '@uif-js/component';
import {ContextType, ImageMetadata, PureComponent, SystemIcon, UserMessageService} from '@uif-js/core';
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
			<StackPanel.Vertical>
				<StackPanel.Item>
					<ApplicationHeader
						title={`Flight ${this.props.flightID}`}
						actions={[
							{
								label: 'Back',
								action: () => {
									navigator.back();
								},
							},
						]}
					/>
				</StackPanel.Item>
				<StackPanel.Item>
					<GridPanel
						columns={['1fr', '1fr', '1fr', '1fr']}
						columnGap={GridPanel.GapSize.M}
						rowGap={GridPanel.GapSize.M}
						outerGap={GridPanel.GapSize.S}
					>
						<GridPanel.Item rowIndex={0} columnIndex={0}>
							<Portlet title={'Origin'} icon={SystemIcon.ARROW_DIAGONAL_UP}>
								<Text size={Text.Size.L}>
									{this.flight.origin.name} - {this.flight.origin.code}
								</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={0} columnIndex={1}>
							<Portlet title={'Destination'} icon={SystemIcon.ARROW_DIAGONAL_DOWN}>
								<Text size={Text.Size.L}>
									{this.flight.origin.name} - {this.flight.origin.code}
								</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={1} columnIndex={0}>
							<Portlet title={'Status'} icon={SystemIcon.INFO}>
								<Text size={Text.Size.L}>{this.flight.status}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={1} columnIndex={1}>
							<Portlet title={'Boarding'} icon={SystemIcon.START_DATE}>
								<Text size={Text.Size.L}>{this.boardingInfo}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={1} columnIndex={2}>
							<Portlet title={'Change Gate'} icon={SystemIcon.DEPARTMENTS}>
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
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={2} columnIndex={0}>
							<Portlet title={'Flight Number'} icon={SystemIcon.NUMERIC}>
								<Text size={Text.Size.L}>{this.flight.flightNumber}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={2} columnIndex={1}>
							<Portlet title={'Airline'} icon={SystemIcon.PERSON}>
								<Text size={Text.Size.L}>{this.flight.airline}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={2} columnIndex={2} rowSpan={3} columnSpan={2}>
							<Portlet title={'Flight Map'} icon={SystemIcon.MAP}>
								<Image scalable={true} image={ImageMetadata.withUrl(this.mapPath)} />
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={3} columnIndex={0}>
							<Portlet title={'Departure Time'} icon={SystemIcon.CLOCK}>
								<Text size={Text.Size.L}>{this.flight.departure}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={3} columnIndex={1}>
							<Portlet title={'Arrival Time'} icon={SystemIcon.CLOCK}>
								<Text size={Text.Size.L}>{this.flight.arrival}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={4} columnIndex={0}>
							<Portlet title={'Altitude'} icon={SystemIcon.HEIGHT}>
								<Text size={Text.Size.L}>{this.flight.altitude + ' ft'}</Text>
							</Portlet>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={4} columnIndex={1}>
							<Portlet title={'Speed'} icon={SystemIcon.INSERT}>
								<Text size={Text.Size.L}>{this.flight.speed + ' mph'}</Text>
							</Portlet>
						</GridPanel.Item>
					</GridPanel>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION, ContextType.MESSAGING];
}
