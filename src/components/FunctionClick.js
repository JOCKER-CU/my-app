import React from 'react';

function FunctionClick() {

    function clickHandler(name, age) {
        console.log("Button clicked", name, age);
    }

    return (
        <div style={{
            padding: '20px',
            border: '2px solid #007bff',
            borderRadius: '8px',
            margin: '10px 0',
            backgroundColor: '#f8f9fa'
        }}>
            <h1 style={{ color: '#007bff' }}>Function Click</h1>
            <button
                onClick={() => clickHandler("Han Naung Soe", 25)}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Click me
            </button>
        </div>
    );
}

export default FunctionClick;