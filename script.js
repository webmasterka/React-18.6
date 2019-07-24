var Counter = React.createClass({
  getDefaultProps: function() {
    console.log('getDefaultProps');
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      counter: 0
    };
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('button',{onClick: this.increment}, 'Increment'),
        React.createElement('button',{onClick: this.decrement}, 'Decrement'),
        React.createElement('span', {}, ' Counter: ' + this.state.counter)
      )
    );
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    })
  },
});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));