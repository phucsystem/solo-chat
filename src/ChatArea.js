import React, { Component } from "react";

class ChatArea extends Component {
	render() {
		var data = this.props.data || [];
		return (
			<div className="chatArea">
				{data.map(function (message, i) {
					return (
						<p key={i}>
							{message}
						</p>
					)
				})}
			</div>
		)
	}
}

export default ChatArea;
