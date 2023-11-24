import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";


const Routers = () =>{


    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:id' element={<Homedetail/>}/>

            </Routes>

        </Router>
    )

}

export default Routers;