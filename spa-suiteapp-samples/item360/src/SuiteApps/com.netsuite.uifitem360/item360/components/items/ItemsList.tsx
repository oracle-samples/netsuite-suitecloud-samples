import {
	ArrayDataSource,
	Comparator,
	ContextType,
	JSX,
	Navigator,
	SystemIcon,
	Type,
	useContext,
	useDispatch,
	useMemo,
	useRef,
	UserMessageService,
	useState,
} from '@uif-js/core';
import {Button, ContentPanel, DataGrid, Field, Link, Modal, StackPanel, TextBox} from '@uif-js/component';
import RootRoute from '../../app/RootRoute';
import {Action} from '../../app/Action';
import ItemsDeleteModal from './ItemsDeleteModal';

interface ItemsListProps {
	data: ArrayDataSource;
}

function ItemsList({data}: ItemsListProps): JSX.Element {
	const navigator = useContext<Navigator>(ContextType.ROUTER_NAVIGATION);
	const messaging = useContext<UserMessageService>(ContextType.MESSAGING);
	const dispatch = useDispatch();
	const dataGridRef = useRef();
	const parsedData = useMemo(() => {
		return data.map((item) => {
			return {
				...item,
				vendorLink: {
					label: item.custrecord_pcpart_vendor_name,
					url: `/app/common/custom/custrecordentry.nl?rectype=${item.vendorRecordId}&id=${item.custrecord_pcpart_vendor_id}`,
					target: Link.Target.BLANK,
				},
				inStock: item.custrecord_pcpart_instock === 'T',
			};
		});
	}, [data]);

	const deleteActionHandle = async (id: number): Promise<void> => {
		const {result, error} = await dispatch(Action.itemDelete(id));
		if (result) {
			messaging.info({
				title: 'Record Deleted',
				content: 'The record has been successfully deleted',
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 5000,
			});
		} else {
			messaging.error({
				title: 'Error',
				content: `Record deletion failed: ${error.message}`,
				displayType: UserMessageService.DisplayType.GROWL,
				duration: 5000,
			});
		}
	};
	const actions = [
		{
			label: 'View',
			id: 'view',
			icon: SystemIcon.RECORD,
			action: ({row}) => {
				navigator.push(RootRoute.ITEM, {id: row.dataItem.id}); // Navigate to a route
			},
		},
		{
			label: 'Edit',
			id: 'edit',
			icon: SystemIcon.EDIT,
			action: ({row}) => {
				navigator.push(RootRoute.ITEM_EDIT, {id: row.dataItem.id}); // Navigate to a route
			},
		},
		{
			label: 'Delete',
			id: 'delete',
			icon: SystemIcon.DELETE,
			type: Button.Type.DANGER,
			action: ({row}) => {
				const closeHandle = (): void => {
					modal.close();
				};
				const deleteHandle = async (): Promise<void> => {
					await deleteActionHandle(row.dataItem.id);
				};
				const content = <ItemsDeleteModal closeHandle={closeHandle} deleteHandle={deleteHandle} />;
				const modal: Modal = new Modal({
					title: 'Delete item',
					content,
					owner: dataGridRef,
				});
				modal.open();
			},
		},
	];
	const columns = useMemo(() => [
		{
			name: 'name',
			label: 'Name',
			binding: 'name',
			type: DataGrid.ColumnType.TEXT_BOX,
			stretchFactor: 1,
		},
		{
			name: 'description',
			label: 'Description',
			binding: 'custrecord_pcpart_description',
			type: DataGrid.ColumnType.TEXT_BOX,
			stretchFactor: 1,
		},
		{
			name: 'category',
			label: 'Category',
			binding: 'custrecord_pcpart_category_name',
			type: DataGrid.ColumnType.TEXT_BOX,
			stretchFactor: 1,
		},
		{
			name: 'vendor',
			label: 'Vendor',
			binding: 'vendorLink',
			type: DataGrid.ColumnType.LINK,
		},
		{
			name: 'price',
			label: 'Price',
			binding: 'custrecord_pcpart_price',
			type: DataGrid.ColumnType.TEXT_BOX,
			stretchFactor: 1,
		},
		{
			name: 'instock',
			label: 'In Stock',
			binding: 'inStock',
			type: DataGrid.ColumnType.CHECK_BOX,
		},
		{
			name: 'action',
			label: 'Action',
			type: DataGrid.ColumnType.ACTION,
			actions: actions,
		},
	]);

	const textFilterRef = useRef();
	const textFilter = (
		<Field label={'Filter by Name'} ref={textFilterRef}>
			<TextBox.Search on={{[TextBox.Event.TEXT_ACCEPTED]: ({currentText}) => setTextFilterValue(currentText)}} />
		</Field>
	);

	const dataGridData = useMemo(() => parsedData, [parsedData]);
	const [textFilterValue, setTextFilterValue] = useState('');
	const [sortedDataSource, setSortedDataSource] = useState(dataGridData);

	const sort = ({currentDirections}) => {
		const direction = currentDirections[0];
		if (!direction) {
			setSortedDataSource(dataGridData);
		} else {
			const ascending = direction.direction === DataGrid.SortDirection.ASCENDING;
			const comparator = Comparator.ofObjectProperty(direction.column.binding, Comparator.lessThan(ascending));
			setSortedDataSource(sortedDataSource.sort(comparator));
		}
	};

	const filteredDataSource = useMemo(() => {
		const textFilterPhrase = textFilterValue.toLowerCase();
		return sortedDataSource.filter(({name}) => {
			return Type.EmptyString.is(textFilterValue) ? true : name.toLowerCase().includes(textFilterPhrase);
		});
	}, [sortedDataSource, textFilterValue]);

	return (
		<ContentPanel outerGap={ContentPanel.GapSize.S}>
			<StackPanel.Vertical itemGap={StackPanel.GapSize.XXS}>
				<StackPanel.Item shrink={0}>
					<StackPanel itemGap={StackPanel.GapSize.XS}>
						<StackPanel.Item>{textFilter}</StackPanel.Item>
					</StackPanel>
				</StackPanel.Item>
				<StackPanel.Item grow={1}>
					<DataGrid
						editable={true}
						dataSource={filteredDataSource}
						columns={columns}
						autoSize={DataGrid.SizingStrategy.INITIAL_WIDTH}
						columnStretch={true}
						ref={dataGridRef}
						sortable={true}
						on={{
							[DataGrid.Event.SORT]: sort,
						}}
					/>
				</StackPanel.Item>
			</StackPanel.Vertical>
		</ContentPanel>
	);
}

export default ItemsList;
