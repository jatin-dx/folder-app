import React, {Component} from 'react'
import FolderIcon from './folder-icon.png'

export default class AddFolder extends Component {
  
  componentDidMount() {
    this.input.select();
  }

  componentWillReceiveProps(newProps) {
    if(newProps !== this.props && newProps.focusInput) {
      this.input.select();
    }
  }
  
  render() {
    const {defaultName, handleFormBlur} = this.props
    return (
      <div className="FolderListItem">
        <form onSubmit={() => handleFormBlur(this.input.value)}>
          <img className="FolderIcon" src={FolderIcon} alt="folder icon"/>
          <input 
            className="FolderName"
            defaultValue={defaultName}
            ref={(input) => this.input = input}
            onBlur={() => handleFormBlur(this.input.value)}/>
        </form>
      </div>
    )
  }
}