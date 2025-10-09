
import styled from 'styled-components';

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: darkcyan;
  }
`;
function ConditionalStyling({ isLoggedIn }) {
    const userName = "Jamie";
    const style = {
        color: isLoggedIn ? "green" : "red",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px",
    }

    return (
        <div>
            <h1>Conditional Styling</h1>
            {isLoggedIn ? <h1 style={style}>Welcome back, {userName}!</h1> : <h1 style={style}>Please log in to continue.</h1>}
            <Button>Click me to log in</Button>
        </div>
    );
}

export default ConditionalStyling;