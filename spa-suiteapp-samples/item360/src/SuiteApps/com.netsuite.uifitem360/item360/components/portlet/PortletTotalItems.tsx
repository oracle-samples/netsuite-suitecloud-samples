import {Kpi, Portlet, Skeleton} from '@uif-js/component';
import {Item360StateItems} from '../../app/InitialState';
import {JSX} from '@uif-js/core';

export default function PortletTotalItems({loading, data}: Item360StateItems): JSX.Element {
	const itemsCount: string = data.length.toString();
	return <Portlet>{loading ? <Skeleton.Kpi /> : <Kpi title={'Total Item Count'} value={itemsCount} />}</Portlet>;
}
