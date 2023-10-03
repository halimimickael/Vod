import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./comps/home";
import VodInput from "./comps/vodInput";
import "./App.css";
import Footer from "./comps/footer";
import MoreInfo from "./comps/moreinfo";

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/info/:id" element={<MoreInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
