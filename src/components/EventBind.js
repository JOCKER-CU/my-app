import { Component } from "react";


class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        }
    }
    clickHandler() {
        console.log("Button clicked", this);
        this.setState({
            message: "Goodbye"
        });
    }
    render() {
        return (
            <div>
                <h1>Event Bind</h1>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.clickHandler()}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>Click me</button>
            </div>
        );
    }
}

export default EventBind;