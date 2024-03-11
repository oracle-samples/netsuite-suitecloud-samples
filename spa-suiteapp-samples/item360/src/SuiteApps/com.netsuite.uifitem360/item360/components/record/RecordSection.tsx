import {JSX} from '@uif-js/core';
import {FieldGroup, GridPanel} from '@uif-js/component';
import RecordField from './RecordField';
import {FormSectionObject} from '../../data/ItemRecord';
import record from 'N/record';

interface RecordSectionProps {
	record: record.Record;
	section: FormSectionObject;
	readonly: boolean;
}
function RecordSection({record, section, readonly}: RecordSectionProps): JSX.Element {
	const {title, fields} = section;

	return (
		<FieldGroup title={title}>
			<GridPanel
				columns={['1fr', '1fr', '1fr', '1fr']}
				rowGap={GridPanel.GapSize.XXS}
				columnGap={GridPanel.GapSize.L}
			>
				{fields.map((fieldId) => (
					<GridPanel.Item>
						<RecordField record={record} fieldId={fieldId} readonly={readonly} />
					</GridPanel.Item>
				))}
			</GridPanel>
		</FieldGroup>
	);
}

export default RecordSection;
