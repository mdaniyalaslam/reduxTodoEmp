import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import store from './Store/reducers';
// import Home from './components/home'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>{store.getState()}</h1>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>DECREMENT</button>
<br/>
<br/>
        <input type="text" name="" />
        <button onClick={() => store.dispatch({ type: "ADD" })}>Add</button> */}
        <h1>Hello {this.props.userName}</h1>
      </div>
    );
  }
}

function mapStateToProp(state){
  return ({
    userName : state.root.userName
  })
}

function mapDispatchToProp(dispatch){
  return ({

  })

}
export default connect(mapStateToProp, mapDispatchToProp)(App);

