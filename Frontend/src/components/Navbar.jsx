import logo from "../images/logo1.jpeg";

function Navbar()
{
  return(
    <div>
         <nav>
                <a href="#"><img src={logo} alt="logo" className="logo"></img></a>
               <ul className="nav-menu">
                  <li><a href="/#home">Home</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#product">Product</a></li>
                  <li><a href="/#service">Service</a></li>
                  <li><a href="/#feedback">Feedback</a></li>
               </ul>
         </nav>
    </div>
  )
}
export default Navbar;