import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
function reducer(state, action){
  return state;
}

function Counter(){
  return (
    <div>
      <button>
        +
      </button> 0
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
