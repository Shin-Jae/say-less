import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import SplashPage from "./components/SplashPage"
import LoginNav from "./components/LoginNav";
import SingleQuestion from "./components/SingleQuestion";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginNav />
          <SplashPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        {isLoaded && (
          <>
            <Navigation isLoaded={isLoaded} />
            <Route path="/home">
              <Feed />
            </Route>
            <Route path="/question/:id">
              <SingleQuestion />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
