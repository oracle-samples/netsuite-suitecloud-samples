import {Portlet, Skeleton, StackPanel} from '@uif-js/component';
import {JSX, Style, Theme, useStyles} from '@uif-js/core';
import {Item360StateItems} from '../../app/InitialState';

export default function PortletInStock({loading, data}: Item360StateItems): JSX.Element {
	return (
		<Portlet title={'Stock Status'}>
			{loading ? <PortletIsOnlineSkeleton /> : <PortletIsOnlineContent data={data} />}
		</Portlet>
	);
}

function PortletIsOnlineSkeleton(): JSX.Element {
	return (
		<StackPanel
			alignment={StackPanel.Alignment.CENTER}
			justification={StackPanel.Justification.SPACE_AROUND}
			outerGap={StackPanel.GapSize.M}
		>
			<StackPanel.Item>
				<Skeleton width={170} height={45} />
			</StackPanel.Item>
			<StackPanel.Item>
				<Skeleton width={170} height={45} />
			</StackPanel.Item>
		</StackPanel>
	);
}

function PortletIsOnlineContent({data}) {
	let inStock = 0;
	let outOfStock = 0;
	data.forEach((item) => {
		item.custrecord_pcpart_instock === 'T' ? inStock++ : outOfStock++;
	});
	return (
		<StackPanel
			alignment={StackPanel.Alignment.CENTER}
			justification={StackPanel.Justification.SPACE_AROUND}
			outerGap={StackPanel.GapSize.M}
		>
			<StackPanel.Item>
				<PortletIsOnlineNumber
					type={PortletIsOnlineNumber.Type.IN_STOCK}
				>{`${inStock} IN STOCK`}</PortletIsOnlineNumber>
			</StackPanel.Item>
			<StackPanel.Item>
				<PortletIsOnlineNumber
					type={PortletIsOnlineNumber.Type.OUT_OF_STOCK}
				>{`${outOfStock} OUT OF STOCK`}</PortletIsOnlineNumber>
			</StackPanel.Item>
		</StackPanel>
	);
}

enum PortletIsOnlineNumberType {
	IN_STOCK = 'inStock',
	OUT_OF_STOCK = 'outOfStock',
}

interface PortletIsOnlineNumberProps {
	type: PortletIsOnlineNumberType;
	children?: JSX.Element;
}

function PortletIsOnlineNumber({type, children}: PortletIsOnlineNumberProps) {
	const style = useStyles((theme: Theme): object => {
		const {name, tokens} = theme;
		switch (name) {
			case Theme.Name.REFRESHED: {
				const type = {
					[PortletIsOnlineNumber.Type.IN_STOCK]: Style.empty(),
					[PortletIsOnlineNumber.Type.OUT_OF_STOCK]: Style.empty(),
				};

				const root = Style.of`
					font-size: ${tokens.fontSizeLarge};
					font-weight: ${tokens.fontWeightSemiBold};
					&.${type[PortletIsOnlineNumber.Type.IN_STOCK.toString()]}{
						color: ${tokens.colorTextUtilitySuccess};
					}
					&.${type[PortletIsOnlineNumber.Type.OUT_OF_STOCK.toString()]}{
						color: ${tokens.colorTextUtilityError};
					}
				`;

				return {
					root,
					type,
				};
			}
			case Theme.Name.REDWOOD: {
				const type = {
					[PortletIsOnlineNumber.Type.IN_STOCK]: Style.empty(),
					[PortletIsOnlineNumber.Type.OUT_OF_STOCK]: Style.empty(),
				};

				const root = Style.of`
					font-size: ${tokens.fontSizeBodyMD};
					font-weight: ${tokens.fontWeightSemiBold};
					&.${type[PortletIsOnlineNumber.Type.IN_STOCK.toString()]}{
						color: ${tokens.colorLightTextSuccess};
					}
					&.${type[PortletIsOnlineNumber.Type.OUT_OF_STOCK.toString()]}{
						color: ${tokens.colorLightTextDanger};
					}
				`;

				return {
					root,
					type,
				};
			}
		}
	});

	return <div class={[style.root, style.type[type]]}>{children}</div>;
}

PortletIsOnlineNumber.Type = PortletIsOnlineNumberType;
