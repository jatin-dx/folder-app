export const OPEN_FOLDER = 'OPEN_FOLDER'
export const BACK = 'BACK'
export const FORWARD = 'FORWARD'
export const MOVE_UP = 'MOVE_UP'
export const CREATE_FOLDER = 'CREATE_FOLDER'

export const openFolder = (id) => ({
  type: OPEN_FOLDER,
  id: id
})

export const createFolder = (name, parentId) => ({
  type: CREATE_FOLDER,
  name: name,
  parent: parentId
})

export const moveBack = () => ({
  type: BACK
})

export const moveForward = () => ({
  type: FORWARD
})

export const moveUp = (parent) => ({
  type: MOVE_UP,
  parent: parent
})