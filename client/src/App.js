import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Share from "./components/Pages/Share";
import Faq from "./components/Pages/Faq";
import Login from "./components/Pages/Login";
import AboutCameron from "./components/Pages/AboutCameron";
import AboutCampbell from "./components/Pages/AboutCampbell";
import AboutDAngelo from "./components/Pages/AboutDAngelo";
import AboutDaniel from "./components/Pages/AboutDaniel";
import AboutEthan from "./components/Pages/AboutEthan";
import AboutPhil from "./components/Pages/AboutPhil";
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
        <Route path="/aboutCameron" element={<AboutCameron/>}></Route>
        <Route path="/aboutEthan" element={<AboutEthan />}></Route>
        <Route path="/aboutDaniel" element={<AboutDaniel />}></Route>
        <Route path="/aboutCampbell" element={<AboutCampbell />}></Route>
        <Route path="/aboutDAngelo" element={<AboutDAngelo />}></Route>
        <Route path="/aboutPhil" element={<AboutPhil />}></Route>
        <Route path="/puzzle" element={<Puzzle />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
