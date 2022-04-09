import {useSelector,useDispatch} from 'react-redux'
import {increment,increase,decrement,toggleCounter} from '../store/counter'
import classes from './Counter.module.css';


const Counter = () => {
  const count = useSelector(state => state.counter.counter);
  const hidden = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch()
  const increaseHandler = () => dispatch(increase(10))
  const incrementHandler = () => dispatch(increment());
  const decrementHandler = () => dispatch(decrement());


  const toggleCounterHandler = () => {dispatch(toggleCounter())
  }
  console.log(count);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {hidden && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment +</button>
        <button onClick={decrementHandler}>Decrement -</button>
        <button onClick={increaseHandler}>Increse by 70</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
