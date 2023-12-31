import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    // localStorage.setItem('auth', 'false')
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <Button onClick={logout}>Exit</Button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
