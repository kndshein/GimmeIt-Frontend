import { Link } from "react-router-dom";
import CartButton from './CartButton'


const Nav = ({ showNav, show, setShowNav }) => {


  return (
    <div className={show ? "nav-container active" : "nav-container"}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/post">
        <div>Post</div>
      </Link>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
      <Link to="/cart">
        <div>Cart</div>
      </Link>
    </div>
  );
};

export default Nav;
