import {DataGrid} from '@uif-js/component';

function createColumns(detailActionCallback) {
	return [
		{name: 'id', binding: 'id', type: DataGrid.ColumnType.DETAIL},
		{
			name: 'origin',
			label: 'Origin',
			binding: 'origin.code',
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
			name: 'arrival',
			label: 'Arrival',
			binding: 'arrival',
			type: DataGrid.ColumnType.TEXT_BOX,
			stretchFactor: 2,
			minWidth: 100,
		},
		{
			name: 'status',
			label: 'Status',
			binding: 'status',
			type: DataGrid.ColumnType.DROPDOWN,
		},

		{
			name: 'gateNumber',
			label: 'Gate',
			binding: 'gateNumber',
			type: DataGrid.ColumnType.LINK,
		},
		{
			name: 'airline',
			label: 'Airline',
			binding: 'airline',
			type: DataGrid.ColumnType.TEXT_BOX,
		},
		{
			name: 'active',
			label: 'Status',
			binding: 'active',
			type: DataGrid.ColumnType.CHECK_BOX,
		},
		{
			name: 'action',
			label: 'Action',
			type: DataGrid.ColumnType.ACTION,
			actions: [
				{
					label: 'Detail',
					id: 'detail',
					action: detailActionCallback,
				},
			],
			width: 150,
		},
	];
}

const FlightColumns = {
	createColumns,
};

export default FlightColumns;
