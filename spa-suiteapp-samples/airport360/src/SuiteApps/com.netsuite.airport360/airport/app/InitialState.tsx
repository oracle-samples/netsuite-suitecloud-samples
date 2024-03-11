import {ArrayDataSource} from '@uif-js/core';

export default {
	gates: {
		data: new ArrayDataSource([]),
		loading: false,
	},
	flights: {
		data: new ArrayDataSource([]),
		loading: false,
		missingGates: false,
	},
};
