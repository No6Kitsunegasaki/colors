import React, { Component } from 'react';

const classes = {
  0 : 'alizarin',
  1 : 'carrot',
  2 : 'sunflower',
  3 : 'turquoise',
  4 : 'emerald',
  5 : 'peterriver',
  6 : 'amethyst',
  7 : 'wetasphalt',  
}

export default class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 0,
      className: 'panel ' + classes[0],
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    var new_color = (this.state.color + 1) % Object.keys(classes).length;
    var new_className = 'panel ' + classes[new_color];
    this.setState({
      color: new_color,
      className: new_className,
    });
  };
  render() {
    return (
    <div className={this.state.className} onClick={this.handleClick}>
    </div>
    );
  };
}

