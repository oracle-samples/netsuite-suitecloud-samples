import {JSX} from '@uif-js/core';
import {StackPanel} from '@uif-js/component';
import RecordSection from './RecordSection';
import {FormSchemeObject} from '../../data/ItemRecord';
import record from 'N/record';
interface RecordFormProps {
	record: record.Record;
	formScheme: FormSchemeObject;
	readonly: boolean;
}

export default function RecordForm({record, formScheme, readonly}: RecordFormProps): JSX.Element {
	return (
		<StackPanel.Vertical outerGap={StackPanel.GapSize.S} itemGap={StackPanel.GapSize.XS}>
			{formScheme.map((section) => (
				<StackPanel.Item>
					<RecordSection record={record} section={section} readonly={readonly} />
				</StackPanel.Item>
			))}
		</StackPanel.Vertical>
	);
}
