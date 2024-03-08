import {StackPanel, TextBox, Button, Image, Text, Modal, GrowlMessage, Loader} from '@uif-js/component';
import {ContextType, ImageMetadata, PureComponent, UserMessageService} from '@uif-js/core';
import {Action} from '../../app/Action';
import GateService from '../../services/GateService';

export default class GateActions extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.state = {
			saving: false,
		};
	}

	render() {
		const currentRow = this.props.grid.dataSource.itemAtIndex(this.props.index);
		const messaging = this.context[ContextType.MESSAGING];
		const alert = (_, button) => {
			Modal.createAlert({
				owner: button,
				label: button.label + ' clicked',
			}).open();
		};
		const toggleGate = async () => {
			const dispatch = this.context[ContextType.DISPATCH];
			this.setState({saving: true});
			console.log('toggle');
			dispatch(Action.gateToggled(this.props.index));
			if (currentRow.active) {
				console.log('closed');
				dispatch(Action.gateClosed(currentRow.gateNumber));
				await GateService.unassignGates(currentRow.gateNumber, this.props.flights.data);
			}
			messaging.info({
				title: `Gate ${currentRow.active ? 'Closed' : 'Opened'} `,
				content: `Gate ${currentRow.gateNumber} has been ${currentRow.active ? 'Closed' : 'Opened'}`,
				displayType: UserMessageService.DisplayType.GROWL,
				type: GrowlMessage.Type.WARNING,
				duration: 2000,
			});
			this.setState({saving: false});
			await GateService.toggleGate(this.props.index);
		};

		const loader = {
			label: 'Toggling gate ...',
			visible: this.state.saving,
			coverParent: true,
			size: Loader.Size.MEDIUM,
		};

		return (
			<StackPanel alignment={StackPanel.Alignment.CENTER} loader={loader}>
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
							<Text>Change assigned flight</Text>
						</StackPanel.Item>
						<StackPanel.Item>
							<TextBox text={currentRow.flight} />
						</StackPanel.Item>
						<StackPanel.Item>
							<StackPanel>
								<StackPanel.Item>
									<Button label={'Save'} type={Button.Type.PRIMARY} action={alert.bind(this)} />
								</StackPanel.Item>
								<StackPanel.Item>
									<Button label={'Cancel'} action={alert.bind(this)} />
								</StackPanel.Item>
							</StackPanel>
						</StackPanel.Item>
					</StackPanel.Vertical>
				</StackPanel.Item>
				<StackPanel.Item>
					<Button label={'Open/Close gate'} type={Button.Type.DANGER} action={toggleGate.bind(this)} />
				</StackPanel.Item>
			</StackPanel>
		);
	}

	static contextTypes = [ContextType.MESSAGING, ContextType.DISPATCH];
}
