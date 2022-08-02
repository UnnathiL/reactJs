// what components to create
// start with what makes sense right now. Rename / Delete later.
// list of github cards code
// component: for card
// and for list of cards

// return(<div style={{color:Math.random()<0.5?'green':'red'}}>Text</div>);

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src="https://placehold.it/75" style={{ width: 75, height: 75 }} />
        <div className="info" style={{ marginleft: 10, display: 'inline-block' }}>
          <div className="name" style={{ fontSize: '125%' }}>Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}

/*
const App = ({title}) => (
  <div className="header">{title}</div>
);
// this function can be written like*/
// extends makes JS class a official React component.
class App extends React.Component {
  // constructor
  // required to have this method
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  mountNode,
);