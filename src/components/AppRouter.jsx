import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((rout) => (
        <Route path={rout.path} element={rout.element} exact={rout.exact} key={rout.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((rout) => (
        <Route path={rout.path} element={rout.element} exact={rout.exact} key={rout.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
