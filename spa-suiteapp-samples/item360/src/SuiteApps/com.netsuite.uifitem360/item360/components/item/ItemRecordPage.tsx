import {ContextType, JSX, Navigator, SystemIcon, useContext, useDispatch, UserMessageService} from '@uif-js/core';
import {ApplicationHeader, Loader, ScrollPanel, StackPanel} from '@uif-js/component';
import * as ItemRecord from '../../data/ItemRecord';
import RootRoute from '../../app/RootRoute';
import {Action} from '../../app/Action';
import RecordForm from '../record/RecordForm';
import * as RecordPage from '../../data/RecordPage';

export default function ItemRecordPage({record, saving, mode}): JSX.Element {
	const readonly = mode === RecordPage.Mode.VIEW;
	const navigator = useContext<Navigator>(ContextType.ROUTER_NAVIGATION);
	const messaging = useContext<UserMessageService>(ContextType.MESSAGING);
	const dispatch = useDispatch();
	let actions = [];

	const saveEditMode = async (id: number): Promise<void> => {
		const {result, error} = await dispatch(Action.itemSave(record));
		if (result) {
			messaging.success({
				title: 'Record Saved',
				content: 'The record has been saved',
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 2000,
			});
			navigator.push(RootRoute.ITEM, {id});
		} else {
			messaging.error({
				title: 'Error',
				content: `Record saving failed: ${error.message}`,
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 2000,
			});
			navigator.push(RootRoute.ITEM_EDIT, {id});
		}
	};

	const saveCreateMode = async (): Promise<void> => {
		const {result, error, recordId} = await dispatch(Action.itemSave(record));
		if (result) {
			messaging.success({
				title: 'Record Saved',
				content: 'The record has been saved',
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 2000,
			});
			navigator.push(RootRoute.ITEM, {id: recordId});
		} else {
			messaging.error({
				title: 'Error',
				content: `Record saving failed: ${error.message}`,
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 2000,
			});
			navigator.push(RootRoute.ITEM_CREATE);
		}
	};

	if (mode === RecordPage.Mode.VIEW) {
		const id = record.getValue(ItemRecord.FieldName.ID);
		actions = [
			{
				label: 'Edit',
				icon: SystemIcon.EDIT,
				type: ApplicationHeader.ActionType.PRIMARY,
				action: () => {
					navigator.push(RootRoute.ITEM_EDIT, {id});
				},
			},
			{
				label: 'Back',
				action: () => {
					navigator.push(RootRoute.ITEMS);
				},
			},
		];
	} else if (mode === RecordPage.Mode.EDIT) {
		const id = record.getValue(ItemRecord.FieldName.ID);
		actions = [
			{
				label: 'Save',
				icon: SystemIcon.SAVE,
				type: ApplicationHeader.ActionType.PRIMARY,
				action: saveEditMode.bind(this, id),
			},
			{
				label: 'Cancel',
				action: () => {
					navigator.push(RootRoute.ITEM, {id});
				},
			},
		];
	} else if (mode === RecordPage.Mode.CREATE) {
		actions = [
			{
				label: 'Save',
				icon: SystemIcon.SAVE,
				type: ApplicationHeader.ActionType.PRIMARY,
				action: saveCreateMode,
			},
			{
				label: 'Cancel',
				action: () => {
					navigator.push(RootRoute.ITEMS);
				},
			},
		];
	}
	const loader = {
		label: 'Saving record...',
		visible: saving,
		coverParent: true,
		size: Loader.Size.EXTRA_LARGE,
	};

	return (
		<StackPanel.Vertical loader={loader}>
			<StackPanel.Item shrink={0}></StackPanel.Item>
			<StackPanel.Item shrink={0}>
				<ApplicationHeader
					title={'Item'}
					subtitle={mode === RecordPage.Mode.CREATE ? 'New Item' : record.getValue(ItemRecord.FieldName.NAME)}
					icon={SystemIcon.ATTRIBUTES}
					actions={actions}
				/>
			</StackPanel.Item>
			<StackPanel.Item grow={1}>
				<ScrollPanel orientation={ScrollPanel.Orientation.VERTICAL}>
					<RecordForm record={record} readonly={readonly} formScheme={ItemRecord.FormScheme} />
				</ScrollPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
