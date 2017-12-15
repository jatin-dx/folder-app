import { OPEN_FOLDER, BACK, FORWARD, MOVE_UP } from '../actions'
const initState = {
  past: [],
  present: 0,
  future: []
}
const track = (state = initState, action) => {
  const {past, present, future} = state;
  let newPresent
  switch (action.type) {
    case OPEN_FOLDER:
      newPresent = action.id
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
    case BACK:
      newPresent = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: newPresent,
        future: [present, ...future]
      }
    case FORWARD:
      newPresent = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: newPresent,
        future: newFuture
      }
    case MOVE_UP:
      return {
        past: [...past, present],
        present: action.parent,
        future: [...future]
      }
    default: 
      return state
  }
};

export default track;