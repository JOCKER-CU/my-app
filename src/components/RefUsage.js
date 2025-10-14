import { useRef } from "react";

function RefUsage() {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <h1>Ref Usage</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default RefUsage;