import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import CatsPage from "./pages/CatsPage";
import CreateCat from "./pages/CreateCat";
import DeleteCat from "./pages/DeleteCat";
import CatDetailWrapper from "./pages/CatDetail";
import Header from "./components/Header";
class App extends React.Component { 
  render(){
    return(
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/cats" element={<CatsPage />} />
          <Route path="/cat/:id" element={<CatDetailWrapper/>} />
          <Route path="/cat/create" element={<CreateCat />} />
          <Route path="/cat/delete/:id" element={<DeleteCat />} />
        </Routes>
    )
  }
}

export default App