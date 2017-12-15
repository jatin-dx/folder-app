import React from 'react'
import {connect} from 'react-redux'
import { moveBack, moveForward, moveUp } from '../actions'

let BackForward = ({ canBack, canForward, moveBack, moveForward, moveUp, canMoveUp, parentId }) => (
  <span className="ButtonWrapper">
    <button onClick={moveBack} disabled={!canBack}>Back</button>
    {/*<button onClick={moveForward} disabled={!canForward}>Forward</button>*/}
    <button onClick={() => moveUp(parentId)} disabled={!canMoveUp}>Up</button>
  </span>
)

const getParent = (folders, currentDir) => {
  return folders[currentDir].parent
}

const mapStateToProps = (state) => {
  return {
    canBack: !!state.track.past.length,
    canForward: !!state.track.future.length,
    canMoveUp: getParent(state.folders, state.track.present) !== null,
    parentId: getParent(state.folders, state.track.present)
  }
}

BackForward = connect(
  mapStateToProps,{
    moveBack,
    moveForward,
    moveUp
  }
)(BackForward)

export default BackForward
