import {
	ApplicationHeader,
	BannerMessage,
	ContentPanel,
	DataGrid,
	ListView,
	Skeleton,
	StackPanel,
} from '@uif-js/component';
import {ContextType, PureComponent, SystemIcon} from '@uif-js/core';
import {Action} from '../../app/Action';
import FlightDetails from './FlightDetails';
import FlightActions from './FlightActions';
import FlightColumns from './FlightColumns';

export default class FlightList extends PureComponent {
	private customiseRowCallback;
	private columns;

	constructor(props, context) {
		super(props, context);
		this.columns = this.createColumns();
		this.customiseRowCallback = this.customizeRow.bind(this);
	}

	async loadData() {
		const dispatch = this.context[ContextType.DISPATCH];
		dispatch(Action.flightsLoad());
		dispatch(Action.gatesLoad());
	}

	createColumns() {
		const navigator = this.context[ContextType.ROUTER_NAVIGATION];
		const detailActionCallback = ({row}) => {
			navigator.push('/flights/:id', {id: row.getCell('id').value});
		};
		return FlightColumns.createColumns(detailActionCallback);
	}

	render() {
		const {flights} = this.props;
		const {loading, data, missingGates} = flights;
		const listView = ListView.ofStaticData({
			dataProvider: () => data, // array of data objects
			layout: {
				[ListView.Layout.TABLE]: {
					columns: this.columns, // array of columns definition
					gridOptions: {
						customizeRow: this.customiseRowCallback,
					},
				},
			},
			availableLayouts: {
				[ListView.Layout.TABLE]: true,
			},
			searchBoxVisible: false,
		});
		const content = loading ? (
			<Skeleton.Table rows={10} columns={8} />
		) : (
			<StackPanel.Vertical itemGap={StackPanel.GapSize.MEDIUM}>
				<StackPanel.Item>
					<BannerMessage
						title={'WARNING'}
						type={BannerMessage.Type.WARNING}
						content={''}
						visible={missingGates}
					>
						Some flights do not have gates assigned!
					</BannerMessage>
				</StackPanel.Item>
				<StackPanel.Item>{listView}</StackPanel.Item>
			</StackPanel.Vertical>
		);
		return (
			<StackPanel.Vertical>
				<StackPanel.Item shrink={0}>
					<ApplicationHeader icon={SystemIcon.LOCALIZE} title={'Flights'} />
				</StackPanel.Item>
				<StackPanel.Item grow={1}>
					<ContentPanel outerGap={ContentPanel.GapSize.LARGE}>{content}</ContentPanel>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	private customizeRow({row, dataGrid, index}) {
		const content = this.detailContent.bind(this, dataGrid, index, row);
		const detailRow = dataGrid.createSyntheticRow({
			height: DataGrid.Row.Height.AUTO,
			cellConfiguration: (row, column) => {
				if (column === dataGrid.bodyRootColumn) {
					return dataGrid.createSyntheticCell({
						row,
						column,
						content: content,
					});
				}
			},
		});
		const gate = row.getCell('gateNumber').value.label;
		if (!gate) {
			row.status = DataGrid.Row.Status.WARNING;
		}
		row.setDetailRow(detailRow);
	}

	private detailContent(dataGrid, index, row) {
		const {flights, gates} = this.props;
		return (
			<StackPanel.Vertical>
				<StackPanel.Item>
					<FlightActions flights={flights} gates={gates} grid={dataGrid} index={index}></FlightActions>
				</StackPanel.Item>
				<StackPanel.Item>
					<FlightDetails grid={dataGrid} index={index} row={row}></FlightDetails>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	componentDidMount() {
		this.loadData();
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION];
}
