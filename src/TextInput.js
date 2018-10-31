import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageBar extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		onSendMessage: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = { message: '' };
	}

	cleanUp() {
		this.setState({ message: '' });
	}

	onChangeHanlder(e) {
		this.props.onChange && this.props.onChange(e);
		this.setState({ message: e.target.value });
	}

	onKeyPressHanlder(e) {
		if (e.key === 'Enter') {
			this.props.onSendMessage && this.props.onSendMessage();
		}
	}

	render() {
		return (
			<div className="textInput">
				<input type="text" value={this.state.message}
					disabled={this.props.isDisabled}
					onChange={this.onChangeHanlder.bind(this)}
					onKeyPress={this.onKeyPressHanlder.bind(this)} />
			</div>
		);
	}
}

export default MessageBar;
