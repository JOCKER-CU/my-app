import { Component } from "react";
function Hello({ name }) {
    return (
        <div>
            <h2>Hello {name}</h2>
        </div>
    );
}


class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
            </div>
        );
    }
}
export default Welcome;
// export default Hello;