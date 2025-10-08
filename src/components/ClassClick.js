import { Component } from "react";


class ClassClick extends Component {
    clickHandler() {
        console.log("Button clicked");
    }
    render() {
        return (
            <div>
                <h1>Class Click</h1>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

export default ClassClick;