import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";

import Gls from "./Components/Scholar/gls";
import Inter from "./Components/Scholar/Inter";
import Busi from "./Components/Scholar/Busi";
import Commu from "./Components/Scholar/Commu";
import Csee from "./Components/Scholar/csee";
import Mach from "./Components/Scholar/Mach";
import Psy from "./Components/Scholar/Psy";
import Spac from "./Components/Scholar/Spac";
import Ict from "./Components/Scholar/ICT";
import Law from "./Components/Scholar/Law";
import Life from "./Components/Scholar/Life";
import Condi from "./Components/Scholar/Condi";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>{/* <Route path="/post" element={<Post/>}/> */}</Routes>
            <Routes>
                <Route path="/GLS" element={<Gls />} />
                <Route path="/Inter" element={<Inter />} />
                <Route path="/Busi" element={<Busi />} />
                <Route path="/Commu" element={<Commu />} />
                <Route path="/csee" element={<Csee />} />
                <Route path="/Ict" element={<Ict />} />
                <Route path="/Law" element={<Law />} />
                <Route path="/Life" element={<Life />} />
                <Route path="/March" element={<Mach />} />
                <Route path="/Psy" element={<Psy />} />
                <Route path="/Spac" element={<Spac />} />
                <Route path="/Condi" element={<Condi />} />

                <Route path="/Post" element={<Post />} />
            </Routes>
        </Router>
    );
};

export default Routers;
