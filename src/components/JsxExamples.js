import React from 'react';

function JsxExamples(props) {
    // Variables for JSX
    const title = "JSX Examples & Testing";
    const userName = "Han Naung Soe";
    const age = 25;
    const isLoggedIn = true;
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    const numbers = [1, 2, 3, 4, 5];

    // Destructuring props (if passed)
    const name = props.name || "Guest User";
    const phone = props.phone || "123-456-7890";

    // Functions
    const greet = (name) => {
        return `Hello, ${name}!`;
    };

    const add = (a, b) => a + b;

    // Inline styles
    const boxStyle = {
        border: '2px solid #007bff',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
    };

    const headingStyle = {
        color: '#007bff',
        fontSize: '20px',
        marginBottom: '10px'
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>{title}</h1>
            <hr />

            {/* Example 1: Embedding Expressions */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>1. Embedding Expressions in JSX</h2>
                <p>Variable: {userName}</p>
                <p>Age: {age}</p>
                <p>Math Expression: 10 + 20 = {10 + 20}</p>
                <p>Function Call: {greet(userName)}</p>
                <p>Addition: {add(5, 10)}</p>
                <p>String Method: {userName.toUpperCase()}</p>
                <p>Name: {name}</p>
                <p>Phone: {phone}</p>
            </div>

            {/* Example 2: Conditional Rendering */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>2. Conditional Rendering</h2>
                <p>Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</p>
                <p>Age Check: {age >= 18 ? "Adult" : "Minor"}</p>
                {isLoggedIn && <p>Welcome back, {userName}!</p>}
                {!isLoggedIn && <p>Please log in to continue.</p>}
            </div>

            {/* Example 3: Rendering Lists */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>3. Rendering Lists with map()</h2>
                <h3>Fruits List:</h3>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
                <h3>Numbers Doubled:</h3>
                <ul>
                    {numbers.map((num, index) => (
                        <li key={index}>{num} x 2 = {num * 2}</li>
                    ))}
                </ul>
            </div>

            {/* Example 4: JSX Attributes */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>4. JSX Attributes</h2>
                <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder"
                    style={{ borderRadius: '10px' }}
                />
                <br />
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    Visit React Docs
                </a>
                <br />
                <button
                    className="btn btn-primary"
                    style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
                    onClick={() => alert('Button Clicked!')}
                >
                    Click Me!
                </button>
            </div>

            {/* Example 5: Inline Styles vs className */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>5. Styling in JSX</h2>
                <p style={{ color: 'red', fontWeight: 'bold' }}>Inline style with red color</p>
                <p style={{ color: 'green', fontSize: '18px' }}>Inline style with green color</p>
                <div className="alert alert-info" role="alert">
                    This uses Bootstrap className
                </div>
            </div>

            {/* Example 6: JSX Fragments */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>6. JSX Fragments</h2>
                <p>Fragments let you group elements without adding extra DOM nodes:</p>
                <>
                    <p>First paragraph in fragment</p>
                    <p>Second paragraph in fragment</p>
                    <p>Third paragraph in fragment</p>
                </>
            </div>

            {/* Example 7: JSX Comments */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>7. JSX Comments</h2>
                {/* This is a JSX comment - it won't show in the browser */}
                <p>Comments in JSX use curly braces: {/* like this */}</p>
                <p>Check the source code to see the comment syntax!</p>
            </div>

            {/* Example 8: Multi-line JSX */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>8. Multi-line JSX Expression</h2>
                {
                    // You can use multi-line expressions
                    userName.length > 10
                        ? <p>Long name: {userName}</p>
                        : <p>Short name: {userName}</p>
                }
            </div>

            {/* Example 9: JSX with Objects */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>9. JSX with Objects</h2>
                {
                    (() => {
                        const person = {
                            firstName: "Han",
                            lastName: "Naung Soe",
                            age: 25,
                            country: "Myanmar"
                        };
                        return (
                            <div>
                                <p><strong>Name:</strong> {person.firstName} {person.lastName}</p>
                                <p><strong>Age:</strong> {person.age}</p>
                                <p><strong>Country:</strong> {person.country}</p>
                            </div>
                        );
                    })()
                }
            </div>

            {/* Example 10: Special Characters & HTML Entities */}
            <div style={boxStyle}>
                <h2 style={headingStyle}>10. Special Characters</h2>
                <p>Less than: &lt;</p>
                <p>Greater than: &gt;</p>
                <p>Copyright: &copy; 2024</p>
                <p>Emoji: 🚀 🎉 ⚛️ 💻</p>
                <p>Math: 2 × 3 = {2 * 3}</p>
            </div>

        </div>
    );
}

export default JsxExamples;

