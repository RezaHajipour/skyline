import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Uber from "./components/Uber";
import Kontakt from "./components/Kontakt";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/uber" element={<Uber />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
