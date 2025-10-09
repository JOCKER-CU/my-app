import { Component } from "react";

class Mango extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }
    render() {
        return (
            <div>
                <h1>Mango</h1>
                <h1>Mango :{this.state.color}</h1>
            </div>
        );
    }
}

export default Mango;