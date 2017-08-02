import React from 'react';
import Panel from './Panel';

export default ({ width }) => {
  var result = [];
  for(var i = 0; i < width; i++) {
    result.push(
      <Panel key={i} />
    );
  }
  return (
    <div name="row">
      {result}
    </div>
  );
};
