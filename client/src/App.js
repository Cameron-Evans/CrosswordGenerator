import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Share from "./components/Pages/Share";
import Faq from "./components/Pages/Faq";
import Login from "./components/Pages/Login";
import AboutMember from "./components/Pages/AboutMember"
import {Cameron, Campbell, DAngelo, Daniel, Ethan, Phil} from "./components/Pages/About"
import { Router, Routes, Route } from "react-router-dom";
import Puzzle from "./components/Pages/Puzzle";
import PageNotFound from "./components/Pages/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/aboutCameron" element={<AboutMember member = {Cameron} />}></Route>
        <Route path="/aboutEthan" element={<AboutMember member = {Ethan} />}></Route>
        <Route path="/aboutDaniel" element={<AboutMember member = {Daniel} />}></Route>
        <Route path="/aboutCampbell" element={<AboutMember member = {Campbell} />}></Route>
        <Route path="/aboutDAngelo" element={<AboutMember member = {DAngelo} />}></Route>
        <Route path="/aboutPhil" element={<AboutMember member = {Phil} />}></Route>
        <Route path="/puzzle" element={<Puzzle />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
