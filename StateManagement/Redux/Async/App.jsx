import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUserAsync from "./fetchUserAsync";

const App = () => {

    const {users, loading, error} = useSelector((state)=> state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserAsync())
    },[dispatch])

    return(
        <>
        {loading && <p>Loading...</p>}

        {error && <p>Error: {error}</p>}

        <ul>
            {users.map((user)=>{
                return <li key={user.id}>{user.firstName}</li>
            })}
        </ul>
        </>
    )
    
}

export default App