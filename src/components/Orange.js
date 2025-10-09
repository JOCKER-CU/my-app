import { Component } from "react";

class Orange extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }
    render() {
        return (
            <div>
                <h1>Orange</h1>
                <h1>Orange :{this.state.color}</h1>
            </div>
        );
    }
}

export default Orange;