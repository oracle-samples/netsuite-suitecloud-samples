import {Button, Heading, StackPanel} from '@uif-js/component';
import {SystemIcon, useDispatch} from '@uif-js/core';
import {Action} from '../app/Action';

export default function Counter({value}) {
	// dispatch function made available by the Store.Provider wrapper in 'CounterApp.js'
	const dispatch = useDispatch();

	// Handler for the increment button
	const incrementButtonHandler = () => {
		// Dispatch Action that increments the counter
		dispatch(Action.counterIncrement());
	};

	// Handler for the decrement button
	const decrementButtonHandler = () => {
		// Dispatch Action that decrements the counter
		dispatch(Action.counterDecrement());
	};

	return (
		<StackPanel.Vertical
			itemGap={StackPanel.GapSize.LARGE}
			outerGap={StackPanel.GapSize.LARGE}
			alignment={StackPanel.Alignment.CENTER}
		>
			<StackPanel.Item>
				<Heading>Counter</Heading>
				{/* Heading */}
			</StackPanel.Item>
			<StackPanel.Item>
				<Heading type={Heading.Type.PAGE_SUBTITLE}>{value}</Heading>
				{/* The actual counter value that is passed down from store in 'CounterApp.js' as 'value' property*/}
			</StackPanel.Item>
			<StackPanel.Item>
				<StackPanel outerGap={StackPanel.GapSize.LARGE} itemGap={StackPanel.GapSize.MEDIUM}>
					<StackPanel.Item>
						<Button icon={SystemIcon.MINUS} action={decrementButtonHandler} label={'Decrement'} />
						{/* Button that triggers the decrement handler */}
					</StackPanel.Item>
					<StackPanel.Item>
						<Button icon={SystemIcon.ADD} action={incrementButtonHandler} label={'Increment'} />
						{/* Button that triggers the increment handler */}
					</StackPanel.Item>
				</StackPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
