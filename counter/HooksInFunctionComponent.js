function Button(props) {
  const handleClick = () => props.onClickFun(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

// Display
function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFun={incrementCounter} increment={1} />
      <Button onClickFun={incrementCounter} increment={5} />
      <Button onClickFun={incrementCounter} increment={10} />
      <Button onClickFun={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
  // alternatives
  // [<Button />, <Display />],
  /* <React.Fragment><Button /><Display /></React.Fragment>,*/
  /* <><Button /><Display /></>,*/
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);