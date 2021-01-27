import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.isLoggedReducer)
  const dispatch = useDispatch();

  return (
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {
          isLogged ? <h2>Info i shouldnt see if im not logged</h2> : ''
        }
      </div>
  );
}

export default App;
