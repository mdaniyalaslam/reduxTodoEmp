import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import store from './Store/reducers';  
// import Home from './components/home'
// import changeName from './Store/Action/action';
import TodoMdware from './Store/middleware/todoMiddleware';


class App extends Component {

  _changeData(){
    console.log('it works');
    this.props.changeName();

  }


  render() {
    return (
      <div className="App">
        {/* <h1>{store.getState()}</h1> */}
        {/* <button onClick={() => store.dispatch({ type: "INCREMENT" })}>Increment</button> */}
        {/* <button onClick={() => store.dispatch({ type: "DECREMENT" })}>DECREMENT</button> */}
{/* <br/> */}
{/* <br/> */}
        {/* <input type="text" name="" /> */}
        {/* <button onClick={() => store.dispatch({ type: "ADD" })}>Add</button> */}

        <h1>Hello {this.props.userName}</h1>
        <button onClick={this._changeData.bind(this)}>Change Name</button>
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
    changeName : ()=>{dispatch(TodoMdware.asyncTodo())}
  })

}
export default connect(mapStateToProp, mapDispatchToProp)(App);

