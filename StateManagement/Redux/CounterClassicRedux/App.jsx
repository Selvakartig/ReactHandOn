import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./counterActions";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
  );
}
