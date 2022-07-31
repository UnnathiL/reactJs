function Button(props) {
    return ( 
      <button onClick={props.onClickFun}>
        +1
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
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter+1);
    return (
      <div> 
        <Button onClickFun={incrementCounter}/>
        <Display message={counter}/>
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