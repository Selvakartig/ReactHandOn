import {BrowserRouter, Routes, Route} from "react-router-dom"
import { lazy, Suspense } from "react"


import Home from "./Home"
import Dashboard from "./Dashboard"
import Nav from "./Nav"
const Admin = lazy(()=> import ('./Admin'))
const Contact = lazy(()=> import ('./Contact'))

export default function App () {
    return(
        <BrowserRouter>
            <Nav />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Dashboard" element={<Dashboard />}/>
                    <Route path="/Admin" element={<Admin />}/>
                    <Route path="/Contact" element={<Contact />}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}