import {
	ApplicationHeader,
	Button,
	ContentPanel,
	GridPanel,
	Portlet,
	Reminder,
	Skeleton,
	StackPanel,
} from '@uif-js/component';
import {ContextType, PureComponent, SystemIcon} from '@uif-js/core';
import {Action} from '../app/Action';
import PortletTime from './dashboard/PortletTime';
import PortletFlights from './dashboard/PortletFlights';

export default class Dashboard extends PureComponent {
	private fligthsWithoutGates;
	private closedGates;
	constructor(props, context) {
		super(props, context);
	}

	async loadData() {
		const dispatch = this.context[ContextType.DISPATCH];
		dispatch(Action.flightsLoad());
		dispatch(Action.gatesLoad());
	}

	private computeWarningData() {
		const {flights, gates} = this.props;
		this.fligthsWithoutGates = flights.data.filter((item) => !item.gateNumber.label).length;
		this.closedGates = gates.data.filter((item) => !item.active).length;
	}

	private renderSkeleton() {
		return (
			<GridPanel
				columns={6}
				defaultColumnWidth={'1fr'}
				gap={GridPanel.GapSize.LARGE}
				outerGap={GridPanel.GapSize.LARGE}
			>
				<GridPanel.Item columnSpan={2} rowIndex={0} columnIndex={0}>
					<Skeleton width={'100%'} height={170} />
				</GridPanel.Item>
				<GridPanel.Item columnSpan={4} rowSpan={2} rowIndex={0} columnIndex={2}>
					<Skeleton width={'100%'} height={300} />
				</GridPanel.Item>
				<GridPanel.Item columnSpan={2} rowSpan={1} rowIndex={1} columnIndex={0}>
					<Skeleton width={'100%'} height={120} />
				</GridPanel.Item>
				<GridPanel.Item columnSpan={2} rowSpan={1} rowIndex={2} columnIndex={0}>
					<Skeleton width={'100%'} height={120} />
				</GridPanel.Item>
			</GridPanel>
		);
	}

	private renderDashboard() {
		const navigator = this.context[ContextType.ROUTER_NAVIGATION];
		const {flights} = this.props;
		const {data} = flights;
		this.computeWarningData();

		return (
			<GridPanel
				columns={6}
				defaultColumnWidth={'1fr'}
				gap={GridPanel.GapSize.LARGE}
				outerGap={GridPanel.GapSize.LARGE}
			>
				<GridPanel.Item columnSpan={2} rowIndex={0} columnIndex={0}>
					<PortletTime />
				</GridPanel.Item>
				<GridPanel.Item columnSpan={4} rowSpan={3} rowIndex={0} columnIndex={2}>
					<PortletFlights flights={data}></PortletFlights>
				</GridPanel.Item>
				<GridPanel.Item columnSpan={2} rowIndex={1} columnIndex={0}>
					<Portlet title={'Closed gates'}>
						<StackPanel
							alignment={StackPanel.Alignment.CENTER}
							justification={StackPanel.Justification.SPACE_BETWEEN}
						>
							<StackPanel.Item>
								<Reminder
									count={this.closedGates}
									description={'Gates are currently closed'}
									color={Reminder.Color.DANGER}
								/>
							</StackPanel.Item>
							<StackPanel.Item>
								<Button label={'To gate list'} action={() => navigator.push('/gates')} />
							</StackPanel.Item>
						</StackPanel>
					</Portlet>
				</GridPanel.Item>
				<GridPanel.Item columnSpan={2} rowIndex={2} columnIndex={0}>
					<Portlet title={'Unassigned flights'}>
						<StackPanel
							alignment={StackPanel.Alignment.CENTER}
							justification={StackPanel.Justification.SPACE_BETWEEN}
						>
							<StackPanel.Item>
								<Reminder
									count={this.fligthsWithoutGates}
									description={'Flights have no gates assigned'}
									color={Reminder.Color.WARNING}
								/>
							</StackPanel.Item>
							<StackPanel.Item>
								<Button label={'To flight list'} action={() => navigator.push('/flights')} />
							</StackPanel.Item>
						</StackPanel>
					</Portlet>
				</GridPanel.Item>
			</GridPanel>
		);
	}

	render() {
		const {flights} = this.props;
		const {loading} = flights;

		return (
			<StackPanel.Vertical>
				<StackPanel.Item shrink={0}>
					<ApplicationHeader
						icon={SystemIcon.HOME}
						title={'Airport 360'}
						subtitle={'Flight & Gate Dashboard'}
					/>
				</StackPanel.Item>
				<StackPanel.Item grow={1}>
					<ContentPanel outerGap={ContentPanel.GapSize.LARGE}>
						{loading ? this.renderSkeleton() : this.renderDashboard()}
					</ContentPanel>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	componentDidMount() {
		this.loadData();
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION];
}
