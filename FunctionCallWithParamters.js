function logRandom(value) {
    console.log(value);
  }
  
  function Button() {
      const [counter, setCounter] = useState(0);
      return <button onClick={()=>{logRandom(5)}}>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  );