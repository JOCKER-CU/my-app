import React from 'react';

function Button() {
    function clickHandler() {
        console.log('Button clicked');
    }
    return (
        <button onClick={clickHandler} style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>Click me</button>
    );
}

export default Button;