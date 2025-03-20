import {ApplicationHeader, ContentPanel, DataGrid, ListView, Skeleton, StackPanel} from '@uif-js/component';
import {ContextType, PureComponent, SystemIcon} from '@uif-js/core';
import {Action} from '../../app/Action';
import GateActions from './GateActions';
import GateDetails from './GateDetails';
import FlightColumns from '../flights/FlightColumns';

export default class GateList extends PureComponent {
	private columns;
	constructor(props, context) {
		super(props, context);
		this.columns = this.createColumns();
	}

	async loadData() {
		const dispatch = this.context[ContextType.DISPATCH];
		dispatch(Action.flightsLoad());
		dispatch(Action.gatesLoad());
	}

	createColumns() {
		return [
			{name: 'detail', binding: 'id', type: DataGrid.ColumnType.DETAIL},
			{
				name: 'gateNumber',
				label: 'Gate',
				binding: 'gateNumber',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
			{
				name: 'airline',
				label: 'Airline',
				binding: 'airline',
				type: DataGrid.ColumnType.TEXT_BOX,
				stretchFactor: 2,
				minWidth: 100,
			},
			{
				name: 'flight',
				label: 'Flight',
				binding: 'flight',
				type: DataGrid.ColumnType.TEXT_BOX,
				stretchFactor: 2,
				minWidth: 100,
			},
			{
				name: 'active',
				label: 'Status',
				binding: 'active',
				type: DataGrid.ColumnType.CHECK_BOX,
			},
		];
	}

	private createFlightColumns() {
		const navigator = this.context[ContextType.ROUTER_NAVIGATION];
		const detailActionCallback = ({row}) => {
			navigator.push('/flights/:id', {id: row.getCell('id').value});
		};
		return FlightColumns.createColumns(detailActionCallback);
	}

	private customizeRow = ({row, dataGrid, index}) => {
		const detailRow = dataGrid.createSyntheticRow({
			height: DataGrid.Row.Height.AUTO,
			cellConfiguration: (row, column) => {
				if (column === dataGrid.bodyRootColumn) {
					const content = this.detailContent.bind(this, dataGrid, index, row, column);
					return dataGrid.createSyntheticCell({
						row,
						column,
						content: content,
					});
				}
			},
		});
		row.setDetailRow(detailRow);
		if (row.getCell('gateNumber').value === this.props.gateID) {
			row.detailVisible = true;
		}
	};

	private detailContent(dataGrid, index) {
		const {flights, gates} = this.props;
		return (
			<StackPanel.Vertical>
				<StackPanel.Item>
					<GateActions flights={flights} gates={gates} grid={dataGrid} index={index}></GateActions>
				</StackPanel.Item>
				<StackPanel.Item>
					<GateDetails
						gates={gates}
						grid={dataGrid}
						index={index}
						flights={flights}
						columns={this.createFlightColumns()}
					></GateDetails>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	render() {
		const {loading, data} = this.props.gates;
		const listView = ListView.ofStaticData({
			dataProvider: () => data, // array of data objects
			layout: {
				[ListView.Layout.TABLE]: {
					columns: this.columns, // array of columns definition
					gridOptions: {
						customizeRow: this.customizeRow,
					},
				},
			},
			availableLayouts: {
				[ListView.Layout.TABLE]: true,
			},
			searchBoxVisible: false,
		});
		const content = loading ? (
			<Skeleton.Table rows={10} columns={3} />
		) : (
			<StackPanel.Vertical>
				<StackPanel.Item>{listView}</StackPanel.Item>
			</StackPanel.Vertical>
		);

		return (
			<StackPanel.Vertical>
				<StackPanel.Item shrink={0}>
					<ApplicationHeader icon={SystemIcon.DOCUMENTS} title={'Gates'} />
				</StackPanel.Item>
				<StackPanel.Item grow={1}>
					<ContentPanel outerGap={ContentPanel.GapSize.LARGE}>{content}</ContentPanel>
				</StackPanel.Item>
			</StackPanel.Vertical>
		);
	}

	componentDidMount() {
		this.loadData();
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION];
}
