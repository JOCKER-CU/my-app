import { useState } from "react";

function TwoWaysDataBinding() {
    const [name, setName] = useState('hello');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Two-Way Data Binding Example</h2>

            {/* Step 3: Bind value and onChange */}
            <input
                type="text"
                value={name}          // input reflects state
                onChange={handleChange} // state updates when input changes
                placeholder="Type your name"
            />

            {/* Step 4: Display updated value */}
            <p>Your name is: {name}</p>
        </div>
    );
}

export default TwoWaysDataBinding;