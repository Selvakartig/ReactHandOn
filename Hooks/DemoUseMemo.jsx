import { useMemo, useState } from "react";

const DemoUseMemo = () => {
    
    const [count, setCount] = useState(10);
    const [dummy, setDummy] = useState(0);

    const expensiveFunc = (n) => {
        console.log("expensive func called....");
        let sum = 0
        for(let i = 1; i<n; i++){ 
            sum += i
        }
        return sum
    }

    const total = useMemo(()=>expensiveFunc(count),[count])

    return(
        <>
        <p>Total {total}</p>
        <p>Dummy {dummy}</p>
        <button onClick={() => setDummy(prev => prev + 1)}>Dummy</button>
        <button onClick={() => setCount(prev => prev + 1)}>Increase Count</button>
        </>
    )
}

export default DemoUseMemo