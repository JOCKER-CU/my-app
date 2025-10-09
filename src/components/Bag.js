import { Component } from "react";
import Orange from "./Orange";
import Mango from "./Mango";
import Apple from "./Apple";

class Bag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    render() {
        return (
            <div>
                <h1>Bag</h1>
                <Orange color="orange" />
                <Mango color="mango" />
                <Apple color="apple" />
            </div>
        );
    }
}

export default Bag;