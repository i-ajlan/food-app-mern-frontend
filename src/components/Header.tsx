import MobileMenu from "./MobileMenu"
import MainNavLinks from "./MainNavLinks";
import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className="text-orange-500 flex justify-between items-center font-bold p-4 text-xl border-b-2 border-orange-500">
      <Link to="/">
        <h1>Food_app</h1>
      </Link>
        <MainNavLinks/>
      
      <MobileMenu/>
    </div>
  )
}

export default Header