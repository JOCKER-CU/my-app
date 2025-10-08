import { Component } from "react";


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    reset() {
        this.setState({
            count: 0
        });
    }
    incrementByFive() {
        this.setState((prevState) => ({
            count: prevState.count + 5
        }));
    }
    decrementByFive() {
        this.setState((prevState) => ({
            count: prevState.count - 5
        }));
    }

    render() {
        const isCountZero = this.state.count === 0;

        return (
            <div style={{
                padding: '20px',
                border: '2px solid #007bff',
                borderRadius: '8px',
                margin: '10px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <h1 style={{ color: '#007bff' }}>Counter</h1>
                <h2 style={{
                    fontSize: '48px',
                    margin: '20px 0',
                    color: this.state.count > 0 ? '#28a745' : this.state.count < 0 ? '#dc3545' : '#6c757d'
                }}>
                    {this.state.count}
                </h2>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => this.increment()}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                    >
                        ➕ Increment
                    </button>

                    <button
                        disabled={isCountZero || this.state.count < 0}
                        onClick={() => this.decrement()}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: isCountZero ? '#6c757d' : '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: isCountZero ? 'not-allowed' : 'pointer',
                            opacity: isCountZero ? 0.6 : 1,
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => {
                            if (!isCountZero) e.target.style.backgroundColor = '#c82333';
                        }}
                        onMouseOut={(e) => {
                            if (!isCountZero) e.target.style.backgroundColor = '#dc3545';
                        }}
                    >
                        ➖ Decrement
                    </button>

                    <button
                        disabled={isCountZero}
                        onClick={() => this.reset()}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: isCountZero ? '#6c757d' : '#ffc107',
                            color: isCountZero ? '#ffffff' : '#000000',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: isCountZero ? 'not-allowed' : 'pointer',
                            opacity: isCountZero ? 0.6 : 1,
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => {
                            if (!isCountZero) e.target.style.backgroundColor = '#e0a800';
                        }}
                        onMouseOut={(e) => {
                            if (!isCountZero) e.target.style.backgroundColor = '#ffc107';
                        }}
                    >
                        🔄 Reset
                    </button>
                    <button
                        onClick={() => this.incrementByFive()}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#17a2b8',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#138496'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#17a2b8'}
                    >
                        ⏫ Increment +5
                    </button>
                    <button
                        disabled={isCountZero || this.state.count < 5}
                        onClick={() => this.decrementByFive()}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: isCountZero ? '#6c757d' : '#fd7e14',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: isCountZero ? 'not-allowed' : 'pointer',
                            opacity: isCountZero || this.state.count < 5 ? 0.6 : 1,
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => {
                            if (!isCountZero && this.state.count >= 5) e.target.style.backgroundColor = '#e8590c';
                        }}
                        onMouseOut={(e) => {
                            if (!isCountZero && this.state.count >= 5) e.target.style.backgroundColor = '#fd7e14';
                        }}
                    >
                        ⏬ Decrement -5
                    </button>
                </div>

                <p style={{ marginTop: '15px', color: '#6c757d', fontSize: '14px' }}>
                    {isCountZero
                        ? "⚠️ Decrement, Reset, and Decrement -5 buttons are disabled (count is 0)"
                        : "✅ All buttons are active"}
                </p>
            </div>
        );
    }
}

export default Counter;