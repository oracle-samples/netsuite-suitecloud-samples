import {PureComponent, SystemIcon} from '@uif-js/core';
import {ContentPanel, Heading, Portlet} from '@uif-js/component';

export default class PortletTime extends PureComponent {
	private timer;

	constructor(props, context) {
		super(props, context);
		this.state = {
			time: new Date().toLocaleTimeString(),
		};
		this.timer = null;
	}

	render() {
		return (
			<Portlet title={'Current Time'} description={'Time in your timezone'} icon={SystemIcon.CLOCK}>
				<ContentPanel
					outerGap={ContentPanel.GapSize.LARGE}
					horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}
				>
					<Heading type={Heading.Type.MEDIUM_HEADING}>{this.state.time}</Heading>
				</ContentPanel>
			</Portlet>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: new Date().toLocaleTimeString(),
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}
