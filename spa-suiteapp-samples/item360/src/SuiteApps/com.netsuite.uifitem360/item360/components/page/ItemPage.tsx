import {JSX, useDispatch, useLayoutEffect} from '@uif-js/core';
import ItemRecordPage from '../item/ItemRecordPage';
import ItemRecordSkeleton from '../item/ItemRecordSkeleton';
import {Action} from '../../app/Action';
import {Item360StateItem} from '../../app/InitialState';
import * as RecordPage from '../../data/RecordPage';

interface ItemPageProps {
	mode?: RecordPage.Mode;
	id?: number;
	item: Item360StateItem;
}

export default function ItemPage({mode = RecordPage.Mode.VIEW, id, item}: ItemPageProps): JSX.Element {
	const {loading, saving, record} = item;

	const dispatch = useDispatch();
	useLayoutEffect(() => {
		if (mode === RecordPage.Mode.CREATE) {
			dispatch(Action.itemCreate());
		} else if (id !== undefined) {
			dispatch(Action.itemLoad(id));
		}
	}, [id, mode]);

	return loading ? <ItemRecordSkeleton /> : <ItemRecordPage record={record} saving={saving} mode={mode} />;
}
