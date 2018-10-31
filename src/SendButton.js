import React, { Component } from "react";
import PropTypes from 'prop-types';

class SendButton extends Component {
	static propTypes = {
		onSendMessage: PropTypes.func,
		isDisabled: PropTypes.bool
	}

	render() {
		return <button onClick={this.props.onSendMessage} disabled={this.props.isDisabled}>Send{this.props.isDisabled}</button>;
	}
}

export default SendButton;
