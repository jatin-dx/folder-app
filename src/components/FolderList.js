import React, { Component } from 'react'
import Folder from './Folder';
import './Folder.css'
import AddFolder from './AddFolder'
import AddFolderImg from './add-folder.png'
import BackForward from '../containers/BackForward'
const UNTITLED = 'Untitled'

export default class FolderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  
  toggleShowForm = () => {
    this.setState({showForm: !this.state.showForm});
  }
  
  checkDuplicateName = (name) => {
    const folders = this.props.folders;
    for(let i = 0;  i < folders.length; i++) {
      if(folders[i].name === name) {
        return false
      }
    }
    return true
  }
  
  createFolder = (name) => {
    if(name.trim()){
      if(this.checkDuplicateName(name)) {
        this.props.createFolder(name, this.props.currentDirId)
        this.props.showMessage(name + ' successfully created!', 'success')
      } else {
        this.props.showMessage('Folder named ' + name + ' already exists', 'error');
      }
    }
    this.toggleShowForm()
  }
  
  getDefaultName = () => {
    let i = 1;
    while(1){
      if(this.checkDuplicateName(UNTITLED + ' ' + i)) {
        return UNTITLED + ' ' + i
      }
      i++;
    }
  }

  render() {
    const { folders,  onFolderClick } = this.props
    const {showForm} = this.state
    return (
      <div>
        <div className="FolderListHead">
          <span>Name</span>
          <div>
            <BackForward />
            <span onClick={this.toggleShowForm}>
              <img src={AddFolderImg} alt="add Folder Icon" className="FolderIcon"/>Add Folder
            </span>
          </div>
        </div>
        {folders.length ? 
          <ul className="FolderList">
          {folders.map(folder => 
            <Folder
            key= {folder.id}
            name={folder.name}
            onClick={() => onFolderClick(folder.id)}
            />
          )}
          </ul>
          : <h5>Folder is Empty</h5>
        }
        {showForm ? <AddFolder handleFormBlur={this.createFolder} defaultName={this.getDefaultName()}/> : ''}
      </div>
    )
  }
}
