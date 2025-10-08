import React from 'react';

function Home(props) {
    const {name , age} = props;
    return (
        <div>
            <h1>Welcome Home</h1>
            <p>This is the Home page. Welcome to our React application!</p>
            <p>Navigate to different pages using the links above.</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Home;
