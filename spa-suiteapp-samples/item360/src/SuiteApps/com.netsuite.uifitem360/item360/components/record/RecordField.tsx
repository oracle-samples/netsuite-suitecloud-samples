import {ArrayDataSource, Date, JSX, useMemo, useState} from '@uif-js/core';
import {CheckBox, DatePicker, Dropdown, Field, Text, TextArea, TextBox} from '@uif-js/component';
import DynamicRecord from '../../data/DynamicRecord';
import NFormat from 'N/format';
import record from 'N/record';
import {FieldName} from '../../data/ItemRecord';

interface RecordFieldProps {
	record: record.Record;
	fieldId: FieldName;
	readonly: boolean;
}

export default function RecordField({record, fieldId, readonly}: RecordFieldProps): JSX.Element {
	const field = record.getField({fieldId});
	const inline = field?.type === DynamicRecord.FieldType.CHECK_BOX;
	const size = inline ? Field.Size.AUTO : Field.Size.LARGE;
	const [valid, setValid] = useState(true);
	const [statusMessage, setStatusMessage] = useState('');
	return (
		<Field
			label={field?.label}
			size={size}
			inline={inline}
			mandatory={!readonly && field?.isMandatory}
			valid={valid}
			statusMessage={statusMessage}
		>
			<RecordFieldControl
				record={record}
				readonly={readonly}
				field={field}
				validSetter={setValid}
				statusMessageSetter={setStatusMessage}
				valid={valid}
			/>
		</Field>
	);
}

function RecordFieldControl({record, field, readonly, validSetter, statusMessageSetter, valid}): JSX.Element {
	switch (field.type) {
		case DynamicRecord.FieldType.CHECK_BOX: {
			return <RecordFieldCheck record={record} field={field} readonly={readonly} />;
		}
		case DynamicRecord.FieldType.TEXT_AREA: {
			return (
				<RecordFieldTextArea
					record={record}
					field={field}
					readonly={readonly}
					validSetter={validSetter}
					statusMessageSetter={statusMessageSetter}
					valid={valid}
				/>
			);
		}
		case DynamicRecord.FieldType.CURRENCY:
		case DynamicRecord.FieldType.CURRENCY2: {
			return (
				<RecordFieldCurrency
					record={record}
					field={field}
					readonly={readonly}
					validSetter={validSetter}
					statusMessageSetter={statusMessageSetter}
					valid={valid}
				/>
			);
		}
		case DynamicRecord.FieldType.SELECT: {
			return (
				<RecordFieldSelect
					record={record}
					field={field}
					readonly={readonly}
					validSetter={validSetter}
					statusMessageSetter={statusMessageSetter}
					valid={valid}
				/>
			);
		}
		case DynamicRecord.FieldType.DATE: {
			return (
				<RecordFieldDate
					record={record}
					field={field}
					readonly={readonly}
					validSetter={validSetter}
					statusMessageSetter={statusMessageSetter}
					valid={valid}
				/>
			);
		}
		default: {
			return (
				<RecordFieldTextBox
					record={record}
					field={field}
					readonly={readonly}
					validSetter={validSetter}
					statusMessageSetter={statusMessageSetter}
					valid={valid}
				/>
			);
		}
	}
}

function RecordFieldTextBox({record, readonly, field, validSetter, statusMessageSetter, valid}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const text = record.getText(id);
	return readonly === true || isReadOnly === true ? (
		<Text>{text}</Text>
	) : (
		<TextBox
			text={text}
			valid={valid}
			enabled={isDisabled !== false}
			on={{
				[TextBox.Event.TEXT_ACCEPTED]: ({currentText}) => {
					try {
						validSetter(true);
						record.setValue(id, currentText);
						statusMessageSetter(null);
					} catch (err) {
						statusMessageSetter(err.message);
						validSetter(false);
					}
				},
			}}
		/>
	);
}

function RecordFieldCurrency({record, readonly, field, validSetter, statusMessageSetter, valid}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const text = record.getText(id);
	return readonly === true || isReadOnly === true ? (
		<Text>{text}</Text>
	) : (
		<TextBox
			text={text}
			enabled={isDisabled !== false}
			valid={valid}
			on={{
				[TextBox.Event.TEXT_ACCEPTED]: ({currentText}) => {
					try {
						// eslint-disable-next-line
						const number = NFormat.parse({value: currentText, type: NFormat.Type.FLOAT});
						validSetter(true);
						record.setValue(id, number);
						statusMessageSetter(null);
					} catch (err) {
						statusMessageSetter(err.message);
						validSetter(false);
					}
				},
			}}
		/>
	);
}

function RecordFieldTextArea({record, readonly, field, validSetter, statusMessageSetter, valid}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const text = record.getText(id);
	return readonly === true || isReadOnly === true ? (
		<Text>{text}</Text>
	) : (
		<TextArea
			text={text}
			enabled={isDisabled !== false}
			valid={valid}
			on={{
				[TextArea.Event.TEXT_ACCEPTED]: ({currentText}) => {
					try {
						validSetter(true);
						record.setValue(id, currentText);
						statusMessageSetter(null);
					} catch (err) {
						statusMessageSetter(err.message);
						validSetter(false);
					}
				},
			}}
		/>
	);
}

function RecordFieldCheck({record, readonly, field}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const value = record.getValue(id);
	const readOnly = readonly === true || isReadOnly;
	return (
		<CheckBox
			value={value}
			enabled={readOnly !== false && isDisabled !== false}
			on={{
				[CheckBox.Event.TOGGLED]: ({value}) => {
					record.setValue(id, value);
				},
			}}
		/>
	);
}

function RecordFieldSelect({record, readonly, field, validSetter, statusMessageSetter, valid}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const selectedValue = record.getValue(id);
	const selectedText = record.getText(id);
	const selectOptions = useMemo(() => {
		return new ArrayDataSource(field.getSelectOptions());
	}, []);
	return readonly === true || isReadOnly === true ? (
		<Text>{selectedText}</Text>
	) : (
		<Dropdown
			dataSource={selectOptions}
			valueMember={'value'}
			displayMember={'text'}
			selectedValue={selectedValue}
			enabled={isDisabled !== false}
			valid={valid}
			on={{
				[Dropdown.Event.SELECTED_ITEM_CHANGED]: ({currentValue}) => {
					try {
						// eslint-disable-next-line
						const number = NFormat.parse({value: currentValue, type: NFormat.Type.INTEGER});
						validSetter(true);
						record.setValue(id, number);
						statusMessageSetter(null);
					} catch (err) {
						statusMessageSetter(err.message);
						validSetter(false);
					}
				},
			}}
		/>
	);
}

function RecordFieldDate({record, readonly, field, validSetter, statusMessageSetter, valid}): JSX.Element {
	const {id, isReadOnly, isDisabled} = field;
	const currenDateText = record.getText(id);
	const currentDate = record.getValue(id);
	const [currentUIFDate, currentUIFDateSetter] = useState(new Date(currentDate));
	const isRequired = field.isMandatory;
	return readonly === true || isReadOnly === true ? (
		<Text>{currenDateText}</Text>
	) : (
		<DatePicker
			date={currentUIFDate}
			allowEmptyValue={isRequired !== true}
			enabled={isDisabled !== true}
			valid={valid}
			on={{
				[DatePicker.Event.DATE_CHANGED]: ({currentDate}) => {
					if (currentDate !== null) {
						try {
							validSetter(true);
							currentUIFDateSetter(currentDate);
							record.setValue(id, currentDate.toDate());
							statusMessageSetter(null);
						} catch (err) {
							statusMessageSetter(err.message);
							validSetter(false);
						}
					} else {
						statusMessageSetter('Invalid date entered');
						validSetter(false);
					}
				},
			}}
		/>
	);
}
