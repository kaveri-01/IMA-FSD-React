import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Components/Navbar";
import ProductDetails from "./ProductDetails";
import Products from "./Products";



function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about/" element = {<About />}/>
       <Route path = "/navbar" element = {<Navbar />}/>
       <Route path ="/products" element = {<Products/>}/>
       

       <Route path = "/products/:id" element = {<ProductDetails />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;