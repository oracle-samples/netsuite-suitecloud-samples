import {DataGrid} from '@uif-js/component';
import {PureComponent} from '@uif-js/core';

export default class GateDetails extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const currentRow = this.props.grid.dataSource.itemAtIndex(this.props.index);
		const gateFlights = this.props.flights.data.filter(
			(flight) => flight.gateNumber && flight.gateNumber.label === currentRow.gateNumber
		);
		return <DataGrid dataSource={gateFlights} columns={this.props.columns} />;
	}
}
