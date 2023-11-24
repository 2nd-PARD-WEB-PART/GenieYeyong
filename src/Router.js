import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";
import Homedetail from "./Components/Homedetail";



const Routers = () =>{


    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/:id" element={<Homedetail/>}/>
            </Routes>
            <Routes>
                <Route path="/post" element={<Post/>}/>
            </Routes>

        </Router>
    )

}

export default Routers;