import useCustomHook from "./useCustomHook";

const UseCustomHookUI = () => {
  const counter1 = useCustomHook(); // both methods can be used
  const { counter, increment, decrement } = useCustomHook(); // both methods can be used

  return (
    <>
      <p>Counter 1 = {counter1.counter}</p>
      <button onClick={() => counter1.increment()}>Increment</button>
      <button onClick={() => counter1.decrement()}>Decrement</button>

      <p>Counter 2 = {counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  );
};

export default UseCustomHookUI;
