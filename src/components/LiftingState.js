function LiftingState({isON, onToggle}) {
    console.log(isON);
    console.log(onToggle);
    return (
        <>
            <h1>Lifting State</h1>
            <button onClick={onToggle}>{isON ? "ON" : "OFF"}</button>
        </>
    );
}

export default LiftingState;