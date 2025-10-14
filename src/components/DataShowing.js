function DataShowing(props) {
    const {firstName, lastName, email, password} = props;
    return (
        <>
            <h1>Data Showing</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </> 
    );
}

export default DataShowing;