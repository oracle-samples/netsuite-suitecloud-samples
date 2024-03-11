import {DataGrid} from '@uif-js/component';
import {ArrayDataSource, PureComponent} from '@uif-js/core';

export default class FlightDetails extends PureComponent {
	private data;
	private columns;

	constructor(props, context) {
		super(props, context);
		const {grid, index} = this.props;
		this.columns = this.createColumns();
		this.data = new ArrayDataSource([grid.dataSource.toArray()[index]]);
	}

	private createColumns() {
		return [
			{
				name: 'flightNumber',
				label: 'Flight Number',
				binding: 'flightNumber',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
			{
				name: 'boardingStatus',
				label: 'Boarding Status',
				binding: 'boardingStatus',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
			{
				name: 'altitude',
				label: 'Altitude',
				binding: 'altitude',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
			{
				name: 'speed',
				label: 'Speed',
				binding: 'speed',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
			{
				name: 'model',
				label: 'Model',
				binding: 'model',
				type: DataGrid.ColumnType.TEXT_BOX,
			},
		];
	}

	render() {
		return <DataGrid dataSource={this.data} columns={this.columns} />;
	}
}
