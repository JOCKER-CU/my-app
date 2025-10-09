import { Component } from "react";


class Apple extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }
    render() {
        return (
            <div>
                <h1>Apple</h1>
                <h1>Apple :{this.state.color}</h1>
            </div>
        );
    }
}

export default Apple;