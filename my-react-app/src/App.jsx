import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Navbar from "./Navbar";

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />}/>
       <Route path = "/navbar" element = {<Navbar />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;