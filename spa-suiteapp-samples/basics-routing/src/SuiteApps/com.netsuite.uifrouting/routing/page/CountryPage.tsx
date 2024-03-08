import {ApplicationHeader, Breadcrumbs, ContentPanel, Heading, Image, StackPanel, Table} from '@uif-js/component';
import {Array, Decorator, SystemIcon} from '@uif-js/core';
import {RootRoute} from '../app/CountriesAppRoute';

export default function CountryPage({countryCode, countries}) {
	let country = null;
	const query = Array.findFirst(countries, (country) => {
		return country.alpha3Code.toLowerCase() === countryCode.toLowerCase();
	});

	if (query.found) {
		country = query.item;
	}

	const title = country ? country.name : 'N/A';

	return (
		<StackPanel.Vertical>
			<StackPanel.Item>
				<ContentPanel
					decorator={Decorator.padding({
						horizontal: Decorator.Padding.LARGE,
						top: Decorator.Padding.LARGE,
					})}
				>
					<Breadcrumbs>
						<Breadcrumbs.Item icon={SystemIcon.HOME} route={RootRoute.DASHBOARD} />
						<Breadcrumbs.Item route={RootRoute.COUNTRIES}>Countries</Breadcrumbs.Item>
						<Breadcrumbs.Item>{title}</Breadcrumbs.Item>
					</Breadcrumbs>
				</ContentPanel>
			</StackPanel.Item>
			<StackPanel.Item>
				<ApplicationHeader title={title} icon={SystemIcon.MAP} />
			</StackPanel.Item>
			<StackPanel.Item>
				<ContentPanel outerGap={ContentPanel.GapSize.LARGE}>
					{country ? <Country data={country} /> : <CountryNotFound />}
				</ContentPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}

function Country({data}) {
	return (
		<StackPanel.Vertical alignment={StackPanel.Alignment.START} itemGap={StackPanel.GapSize.LARGE}>
			<StackPanel.Item>
				<ContentPanel
					outerGap={ContentPanel.GapSize.LARGE}
					decorator={Decorator.background({color: Decorator.Color.NEUTRAL})}
				>
					<Image image={{url: data.flags.png, caption: 'flag', height: 100}} />
				</ContentPanel>
			</StackPanel.Item>
			<StackPanel.Item>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.Cell>Name</Table.Cell>
							<Table.Cell>Native Name</Table.Cell>
							<Table.Cell>Population</Table.Cell>
							<Table.Cell>Area</Table.Cell>
							<Table.Cell>Capital</Table.Cell>
							<Table.Cell>Region</Table.Cell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>{data.name}</Table.Cell>
							<Table.Cell>{data.nativeName}</Table.Cell>
							<Table.Cell>{data.population}</Table.Cell>
							<Table.Cell>{data.area}</Table.Cell>
							<Table.Cell>{data.capital}</Table.Cell>
							<Table.Cell>{data.region}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}

function CountryNotFound() {
	return <Heading type={Heading.Type.MEDIUM_HEADING}>Country not found...</Heading>;
}
