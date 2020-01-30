import React from 'react';
import './App.css';
import {connect} from 'react-redux'

const App = ({decrementClick, incrementClick, count}) => {
  
// store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'INCREMENT' }) // dispatch truyen vao type và payload , payload đc hiểu như params
// store.dispatch({ type: 'INCREMENT' }) // dispatch  dựa vào tpye để thực hiện một hành động nào đó
// store.dispatch({ type: 'DECREMENT' })

// const incrementClick = () => {
//   store.dispatch({ type: 'INCREMENT' })
// }
// const decrementClick = () => {
//   store.dispatch({ type: 'DECREMENT' })
// }
  return (
    <div className="App">
      <button onClick={() => incrementClick()}>Add</button>
      <button onClick={() => decrementClick()}>Sub</button>
      {count}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    incrementClick: () => {
      dispatch({ type: 'INCREMENT' })
    },
    decrementClick: () => {
      dispatch({ type: 'DECREMENT' })
    }
  }
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default withConnect(App);
