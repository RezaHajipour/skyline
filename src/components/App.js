import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Uber from "./Uber";
import Kontakt from "./Kontakt";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/uber" element={<Uber />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
