import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";

// App theme
import ThemeProvider from "./components/ThemeProvider";

//Horizontal Layout
import HorizontalContainer from "./components/HorizontalContainer";

// App level dialogs
import SystemDialogs from "Components/SystemDialogs";

// Main Routes (App level)
import { LoginComponent } from "../session";
// Error pages
import NotFound from "./components/ErrorPages/Err404";

import Auth from "Auth";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 *
 */
const AppEntry = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

function App(props) {
  const { location, match, loggedInUser } = props;

  // check if user is authenticated, if not redirect to login
  switch (new Auth().isAuthenticated()) {
    case false:
      if (location.pathname === "/") {
        return <Redirect to={"/login"} />;
      }
    case true:
      if (location.pathname === "/") {
        return <Redirect to={"/app/crm/leads"} />;
      }
    default:
      break;
  }

  return (
    <ThemeProvider>
      <NotificationContainer />
      <SystemDialogs />
      <Switch>
        <AppEntry
          path={`${match.url}app`}
          authUser={loggedInUser}
          component={HorizontalContainer}
        />
        <Route path={`/login`} exact component={LoginComponent} />

        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

// map state to props
const mapStateToProps = ({ sessionState }) => {
  const { authState } = sessionState;
  const { loggedInUser } = authState;
  return { loggedInUser };
};

// export default App;

export default connect(mapStateToProps)(App);
