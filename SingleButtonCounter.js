function logRandom() {
    console.log(Math.random());
}

function Button() {
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue);
    const [counter, setCounter] = useState(0);
    // onClick={functionRef}
    // return <button onClick={logRandom}>{counter}</button>;
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>; // jsx format
    // inline function definition as function ref
    // return <button onClick={ () => console.log(Math.random())}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);