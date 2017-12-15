import React from 'react';

const BackForward = ({ canBack, canForward, moveBack, moveForward, moveUp, canMoveUp }) => (
  <div>
    <button onClick={moveBack} disabled={!canBack}>Back</button>
    {/*<button onClick={moveForward} disabled={!canForward}>Forward</button>*/}
    <button onClick={moveUp} disabled={!canMoveUp}>Up</button>
  </div>
)

export default BackForward