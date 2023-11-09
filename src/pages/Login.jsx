import React, { useContext } from "react";
import { MyInput } from "../components/UI/Input/Input";
import { Button } from "../components/UI/Button/Button";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>You need to log in</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <Button>Go</Button>
      </form>
    </div>
  );
};

export default Login;
