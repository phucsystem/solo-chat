import React, { Component } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import PropTypes from "prop-types";

class MessageBar extends Component {
    static propTypes = {
        onSendMessage: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isDisabled: false
        };
    }

    cleanUp() {
        this.setState({
            message: ''
        });
    }

    async onSendMessageHandler() {
        if (this.state.isDisabled) {
            return;
        }

        if (this.state.message === '/time') {
            this.props.onSendMessage && this.props.onSendMessage((new Date()).toString());
        } else if (this.state.message === '/goodbye') {
            this.setState({
                isDisabled: true
            });
            this.props.onSendMessage && this.props.onSendMessage('Goodbye. Have a nice day.');

        } else if (this.state.message.startsWith('/starwars')) {
            var character = this.state.message.split(' ')[1];
            var people = await fetch('https://swapi.co/api/people/?search=' + character);
            var json = await people.json();
            var characterName = '';
            characterName = json.results && json.results[0] && json.results[0].name;
            if (characterName) {
                this.props.onSendMessage && this.props.onSendMessage(characterName);
            } else {
                this.props.onSendMessage && this.props.onSendMessage('Your character is not available.');
            }
        } else if (this.state.message.startsWith('/')) {
            this.props.onSendMessage && this.props.onSendMessage('Sorry. This command is not available.');
        } else {
            this.state.message && this.props.onSendMessage && this.props.onSendMessage(this.state.message);
        }

        this.cleanUp();
        this.refs.messageInput.cleanUp();
    }

    onChangeHandler(e) {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        return (
            <div className="messageBar">
                <TextInput ref="messageInput"
                    onChange={this.onChangeHandler.bind(this)}
                    onSendMessage={this.onSendMessageHandler.bind(this)}
                    isDisabled={this.state.isDisabled} />
                <SendButton
                    onSendMessage={this.onSendMessageHandler.bind(this)}
                    isDisabled={this.state.isDisabled} />
            </div>
        );
    }
}

export default MessageBar;
