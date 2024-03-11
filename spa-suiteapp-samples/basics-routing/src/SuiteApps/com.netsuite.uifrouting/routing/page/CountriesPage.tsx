import {ApplicationHeader, ContentPanel, DataGrid, StackPanel} from '@uif-js/component';
import {ArrayDataSource, Hook, Route, SystemIcon} from '@uif-js/core';
import {RootRoute} from '../app/CountriesAppRoute';

export default function CountriesPage({countries}) {
	const columns = Hook.useMemo(() => {
		return [
			{name: 'countryCode', label: 'Country Code', binding: 'countryCode', type: DataGrid.ColumnType.LINK},
			{name: 'name', label: 'Name', binding: 'name', type: DataGrid.ColumnType.TEXT_BOX},
			{name: 'nativeName', label: 'Native Name', binding: 'nativeName', type: DataGrid.ColumnType.TEXT_BOX},
			{name: 'population', label: 'Population', binding: 'population', type: DataGrid.ColumnType.TEXT_BOX},
			{name: 'area', label: 'Area', binding: 'area', type: DataGrid.ColumnType.TEXT_BOX},
			{name: 'capital', label: 'Capital', binding: 'capital', type: DataGrid.ColumnType.TEXT_BOX},
		];
	});
	const dataSource = new ArrayDataSource(
		countries.map((country) => {
			const {name, nativeName, population, area, capital, alpha3Code} = country;
			const countryRoute = Route.create(RootRoute.COUNTRY);
			return {
				name,
				nativeName,
				population,
				area,
				capital,
				countryCode: {
					url: `#${countryRoute.constructUrl({countryCode: alpha3Code})}`,
					label: alpha3Code,
				},
			};
		})
	);
	return (
		<StackPanel.Vertical>
			<StackPanel.Item shrink={0}>
				<ApplicationHeader title={'Countries'} subtitle={'Countries of the World'} icon={SystemIcon.LOCALIZE} />
			</StackPanel.Item>
			<StackPanel.Item grow={1}>
				<ContentPanel
					outerGap={ContentPanel.GapSize.LARGE}
					horizontalAlignment={ContentPanel.HorizontalAlignment.START}
				>
					<DataGrid dataSource={dataSource} columns={columns} />
				</ContentPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
