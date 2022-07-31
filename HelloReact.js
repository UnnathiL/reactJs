function Hello() {
    // return <div>Hello react</div>; // JSX
    return React.createElement('div', null, 'Hello React!!!');
  }
  
  ReactDOM.render(
    // <Hello />, // JSX
    React.createElement(Hello, null),
    document.getElementById('mountNode'),
  );