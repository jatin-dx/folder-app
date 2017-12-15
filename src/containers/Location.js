import React from 'react'
import {connect} from 'react-redux'
import { openFolder } from '../actions'

let Location = ({ hierarchy, openFolder }) => (
  <div className="LocationWrapper">
    <a href="" onClick={(e) =>{ 
      e.preventDefault()
      openFolder(0)}}
      className="LocationFolder"
    >
      <span className="LocationFolderName">.</span> /
    </a>
    {hierarchy.map((folder) => (
      <a href="" onClick={(e) =>{ 
        e.preventDefault()
        openFolder(folder.id)}}
        key={folder.id} className="LocationFolder"
      >
        <span className="LocationFolderName">{folder.name}</span> /
      </a>
    ))}
  </div>
)

const getHierarchy = (folders, currentDir) => {
  let hierarchy = [];
  while(folders[currentDir].parent !== null) {
    hierarchy.unshift(folders[currentDir])
    currentDir = folders[currentDir].parent
  }
  return hierarchy
}

const mapStateToProps = (state) => {
  return {
    hierarchy: getHierarchy(state.folders, state.track.present)
  }
}

Location = connect(
  mapStateToProps, {
    openFolder
  }
)(Location)

export default Location
