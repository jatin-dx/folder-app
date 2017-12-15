import {connect} from 'react-redux';
import { openFolder, createFolder } from '../actions';
import FolderList from '../components/FolderList';

const getChildFolders = (folders, currentDirId) => {
  let children = folders[currentDirId].children.map((childId) => folders[childId]);
  return children;
}

const mapStateToProps = (state) => {
  return {
    folders: getChildFolders(state.folders, state.track.present),
    currentDirId: state.track.present
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onFolderClick: (id) => dispatch(openFolder(id)),
    createFolder: (name, parentId) => dispatch(createFolder(name, parentId)),
    showMessage: ownProps.showMessage
  }
}

const VisibleFolderList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderList)

export default VisibleFolderList
