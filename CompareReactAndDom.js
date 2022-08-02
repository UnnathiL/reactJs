const render = () => {
  // controlled by DOM Api directly, html version we used string 
  document.getElementById('mountNode').innerHTML = `
      <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;

  // controlled by reactApi which in turn uses DOM API, pure JS
  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString()),
    ),
    document.getElementById('mountNode2'),
  );
}
setInterval(render, 1000);


