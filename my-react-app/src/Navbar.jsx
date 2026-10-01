import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar (){
    return (

        <nav className="navbar"> 
       <div className="">
        <Link to = "/"> Home</Link>
         <Link to = "/about"> About</Link>
          <Link to = "/services"> Services</Link>
           <Link to = "/contact"> Contact</Link>
       </div>
       </nav>
    )
}
export default Navbar