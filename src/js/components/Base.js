import React from 'react';
import Row from './Row';

export default ({ height, width }) => {
  var result = [];
  for(var i = 0; i < height; i++) {
    result.push(
      <Row width={width} key={i} />
    );
  }
  return (
    <div name="base">
      {result}
    </div>
  );
};

