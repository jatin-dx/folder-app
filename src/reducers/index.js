import { combineReducers } from 'redux'
import folders from './folders'
import track from './track'

const FolderApp = combineReducers({folders, track})

export default FolderApp;