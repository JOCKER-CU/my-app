// function FunctionExpression(props) {
//     return (
//         <>
//         <div>Function Expression 1</div>
//         <ul>
//             <li>{props.first}</li>
//             <li>{props.second}</li>
//             <li>{props.third}</li>
//         </ul>
//         </>
//     )
// }
// const FunctionExpression = function(props) {
//     return (
//         <>
//         <div>Function Expression 2</div>
//         <ul>

//             <li>{props.first}</li>
//             <li>{props.second}</li>
//             <li>{props.third}</li>
//         </ul>
//         </>
//     )
// }

// const FunctionExpression = (props) => {
//     return (
//         <>
//         <div>Function Expression 3 ES6</div>
//         <ul>
//             <li>{props.first}</li>
//             <li>{props.second}</li>
//             <li>{props.third}</li>
//         </ul>
//         </>
//     )
// }
const bool = false;

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};
const str1 = "just";

function Example2(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};
const FunctionExpression = ({ first, second, third }) => {
    const items = [20, 30, 40];
    return (
        <>
            <div>Function Expression 4 ES6</div>
            <ul>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Example toggleBoolean={!bool} />
            <Example2
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another string'}
            />
        </>
    )
}
export default FunctionExpression;