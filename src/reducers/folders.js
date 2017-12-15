import {CREATE_FOLDER} from '../actions'
let counter = 1
const initState = {
  0: {
    id: 0,
    name: 'Root',
    children: [],
    parent:  null
  }
};
const folders = (state = initState, action) => {
  switch (action.type){
    case CREATE_FOLDER:
      counter++
      let parent = Object.assign({}, state[action.parent])
      parent.children = [...parent.children, counter]
      let newFolder = {
          id: counter,
          name: action.name,
          parent: action.parent,
          children: []
        }
      return { ...state, [action.parent]: parent, [counter]: newFolder}
    default:
      return state
  }
};

export default folders;