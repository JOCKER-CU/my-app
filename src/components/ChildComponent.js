import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h1>Child Component</h1>
                <button onClick={() => this.props.greetParent("Child")}>Greet Parent</button>
            </div>
        );
    }
}

export default ChildComponent;