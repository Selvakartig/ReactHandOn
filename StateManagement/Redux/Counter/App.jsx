import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./counterSlice";

const App = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}

export default App