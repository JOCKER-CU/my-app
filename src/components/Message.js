import { Component } from "react";

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Learning React is fun!",
            isToggled: false
        };
    }

    toggleMessage() {
        this.setState((prevState) => ({
            message: prevState.isToggled
                ? "Learning React is fun!"
                : "Learning React is great!",
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        return (
            <div style={{
                padding: '20px',
                border: '2px solid #007bff',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <h1 style={{ color: this.state.isToggled ? '#28a745' : '#007bff' }}>
                    {this.state.message}
                </h1>
                <button
                    onClick={() => this.toggleMessage()}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Toggle Message
                </button>
                <p style={{ marginTop: '10px', color: '#6c757d' }}>
                    Status: {this.state.isToggled ? "Toggled ✅" : "Default 🔵"}
                </p>
            </div>
        );
    }
}

export default Message;