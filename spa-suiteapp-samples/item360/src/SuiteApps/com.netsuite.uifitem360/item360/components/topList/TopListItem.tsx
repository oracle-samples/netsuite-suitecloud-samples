import {Badge, ContentPanel, Field, StackPanel, Text} from '@uif-js/component';
import {Decorator, JSX} from '@uif-js/core';

interface TopListItemProps {
	name: string;
	price: number;
	inStock: boolean;
	isLast: boolean;
}

export default function TopListItem({name, price, inStock, isLast}: TopListItemProps): JSX.Element {
	const decorator = !isLast
		? Decorator.border({
				bottom: true,
				color: Decorator.Color.NEUTRAL,
				strength: Decorator.Strength.LIGHT,
		  })
		: undefined;
	return (
		<StackPanel
			itemGap={StackPanel.GapSize.M}
			outerGap={StackPanel.GapSize.S}
			decorator={decorator}
			alignment={StackPanel.Alignment.CENTER}
		>
			<StackPanel.Item grow={1}>
				<Field label={'Name'}>
					<Text>{name}</Text>
				</Field>
			</StackPanel.Item>
			<StackPanel.Item>
				<Field label={'Cost'}>
					<Text type={Text.Type.STRONG}>{price}</Text>
				</Field>
			</StackPanel.Item>
			<StackPanel.Item basis={'150px'}>
				<ContentPanel horizontalAlignment={ContentPanel.HorizontalAlignment.END}>
					<Badge status={inStock ? Badge.Status.SUCCESS : Badge.Status.ERROR}>
						{inStock ? 'in stock' : 'out of stock'}
					</Badge>
				</ContentPanel>
			</StackPanel.Item>
		</StackPanel>
	);
}
