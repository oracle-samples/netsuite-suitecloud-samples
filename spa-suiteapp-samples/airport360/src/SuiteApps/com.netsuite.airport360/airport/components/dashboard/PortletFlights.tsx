import {PureComponent, SystemIcon, Function, ContextType} from '@uif-js/core';
import {Portlet, DataGrid} from '@uif-js/component';

export default class PortletFlights extends PureComponent {
	private statuses;
	private updater;
	private rowUpdater;
	private detailActionCallback;
	private columns;
	private customiseRowCallback;
	constructor(props, context) {
		super(props, context);
		this.state = {
			flights: undefined,
			loading: true,
			changeID: undefined,
		};
		this.detailActionCallback = Function.VOID;
		this.columns = this.createColumns();
		this.customiseRowCallback = this.customiseRow.bind(this);
		this.statuses = ['DELAYED', 'ON TIME', 'DEPARTED', 'LANDED', 'CANCELLED', 'BOARDING'];
	}

	private createColumns() {
		return [
			{name: 'id', binding: 'id', visible: false, type: DataGrid.ColumnType.DETAIL},
			{
				name: 'flightNumber',
				label: 'Flight Number',
				binding: 'flightNumber',
				type: DataGrid.ColumnType.TEXT_BOX,
				stretchFactor: 2,
				minWidth: 100,
			},
			{
				name: 'destination',
				label: 'Destination',
				binding: 'destination.code',
				type: DataGrid.ColumnType.TEXT_BOX,
				stretchFactor: 2,
				minWidth: 100,
			},

			{
				name: 'departure',
				label: 'Departure',
				binding: 'departure',
				type: DataGrid.ColumnType.TEXT_BOX,
				stretchFactor: 2,
				minWidth: 100,
			},
			{
				name: 'status',
				label: 'Status',
				binding: 'status',
				type: DataGrid.ColumnType.DROPDOWN,
				stretchFactor: 2,
			},

			{
				name: 'gateNumber',
				label: 'Gate',
				binding: 'gateNumber',
				type: DataGrid.ColumnType.LINK,
			},
			{
				name: 'action',
				label: 'Action',
				type: DataGrid.ColumnType.ACTION,
				actions: [
					{
						label: 'Detail',
						id: 'detail',
						action: ({row}) => {
							const id = row.getCell('id').value;
							this.detailActionCallback(id);
						},
					},
				],
				width: 150,
			},
		];
	}

	private customiseRow({row}) {
		const id = row.getCell('id').value;
		const gateNumber = row.getCell('gateNumber').value.label;
		this.rowUpdater = setInterval(() => {
			if (id === this.state.changeID && gateNumber) {
				const status = this.statuses[Math.floor(Math.random() * this.statuses.length)];
				row.getCell('status').setValue(status);
				row.status = DataGrid.Row.Status.INFO;
				setTimeout(function () {
					row.status = DataGrid.Row.Status.SUCCESS;

					setTimeout(function () {
						row.status = DataGrid.Row.Status.INFO;
					}, 250);

					setTimeout(function () {
						if (!gateNumber) {
							row.status = DataGrid.Row.Status.WARNING;
						} else {
							row.status = DataGrid.Row.Status.NONE;
						}
					}, 500);
				}, 500);
			}
		}, 2000);
		if (!gateNumber) {
			row.status = DataGrid.Row.Status.WARNING;
		}
	}

	render() {
		return (
			<Portlet title={'Next departing flights'} icon={SystemIcon.LOCALIZE}>
				<DataGrid
					dataSource={this.state.flights}
					columns={this.columns}
					columnStretch={true}
					customizeRow={this.customiseRowCallback}
					paging={true}
					pageSize={8}
				/>
			</Portlet>
		);
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	componentDidMount() {
		this.setState({
			flights: this.props.flights,
			loading: false,
		});
		this.updater = setInterval(() => {
			this.setState({
				changeID: this.getRandomInt(this.props.flights.length) + 1,
			});
		}, 2000);
		const navigator = this.context[ContextType.ROUTER_NAVIGATION];
		this.detailActionCallback = (id) => {
			navigator.push('/flights/:id', {id});
		};
	}

	componentWillUnmount() {
		clearInterval(this.updater);
		clearInterval(this.rowUpdater);
	}

	static contextTypes = [ContextType.DISPATCH, ContextType.ROUTER_NAVIGATION];
}
