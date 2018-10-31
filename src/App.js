import React, { Component } from "react";
import MessageBar from "./MessageBar";
import ChatArea from "./ChatArea";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }
    sendMessageHandler(newMessage) {
        this.setState({
            messages: [
                ...this.state.messages,
                newMessage
            ]
        });
    }
    render() {
        return (
            <div className="app">
                <ChatArea data={this.state.messages} />
                <MessageBar onSendMessage={this.sendMessageHandler.bind(this)} />
            </div>
        );
    }
}

export default App;
