import { logout } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const myNav = (
    <nav>
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
      </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
        {isAuth && myNav}
    </header>
  );
};

export default Header;
