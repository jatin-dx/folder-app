import React from 'react';
import FolderIcon from './folder-icon.png'

const FolderList = ({ name, onClick }) => (
  <li onClick={onClick} className="FolderListItem">
    <img className="FolderIcon" src={FolderIcon} alt="folder icon"/>
    <span className="FolderName">{name}</span>
  </li>
)

export default FolderList