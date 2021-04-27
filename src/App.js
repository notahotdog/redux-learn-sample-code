import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(signIn())}> Log In </button>
      {isLogged ? <h1>Logged in </h1> : <h1>Not logged in</h1>}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
