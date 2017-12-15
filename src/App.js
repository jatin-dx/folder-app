import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux'
import FolderApp from './reducers'
import { Provider} from 'react-redux'
import VisibleFolderList from './containers/VisibleFolderList'
import Location from './containers/Location'
import Message from './components/Message'

const store = createStore(FolderApp)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMessage: false,
      message: '',
      messageType: 'success'
    }
  }
  
  toggleError = (message, type) => {
    this.setState({showMessage: true, message: message, messageType: type});
    setTimeout(() => {this.setState({showMessage: false})}, 2000)
  }

  render() {
    const {showMessage, message, messageType} = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Location />
          <VisibleFolderList showMessage={this.toggleError}/>
          {showMessage ? <Message message={message} type={messageType}/> : ''}
        </div>
      </Provider>
    );
  }
}

export default App;
