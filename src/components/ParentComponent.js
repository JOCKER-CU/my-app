import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parentName: "Parent Component"
        }
    }

    greetParent = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent greetParent={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;