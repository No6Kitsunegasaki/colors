import React from 'react';
import { render } from 'react-dom';
import Base from './Base';

var base = {height: 6, width: 6};

export default class App extends React.Component {
render() {
  return (
    <div name="app">
      <Base height={base.height} width={base.width} key="base" />
    </div>
  );
}
}
