import {Dropdown, GrowlMessage, Image, StackPanel, Text} from '@uif-js/component';
import {ContextType, ImageMetadata, PureComponent, UserMessageService} from '@uif-js/core';
import {Action} from '../../app/Action';

export default class FlightActions extends PureComponent {
	private activeGates;

	constructor(props, context) {
		super(props, context);
		this.activeGates = this.props.gates.data.filter((gate) => gate.active === true);
	}

	private async changeGate(gate) {
		const dispatch = this.context[ContextType.DISPATCH];
		const {grid, index} = this.props;
		const currentRow = grid.dataSource.itemAtIndex(index);
		dispatch(Action.flightsUpdate(this.props.index, gate));
		const messaging = this.context[ContextType.MESSAGING];
		messaging.info({
			title: 'Gate Assigned',
			content: `Gate ${gate} has been assigned to flight ${currentRow.flightNumber} `,
			displayType: UserMessageService.DisplayType.GROWL,
			type: GrowlMessage.Type.WARNING,
			duration: 2000,
		});
	}

	render() {
		return (
			<StackPanel alignment={StackPanel.Alignment.CENTER}>
				<StackPanel.Item>
					<Image
						size={Image.Size.XXL}
						image={ImageMetadata.withUrl(
							'/spa-app/com.netsuite.airport360/airport/assets/planes/1904.jpg'
						).withCaption('Cool plane!')}
					/>
				</StackPanel.Item>
				<StackPanel.Item>
					<StackPanel.Vertical>
						<StackPanel.Item>
							<Text>Change assigned gate</Text>
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
		);
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.MESSAGING];
}
