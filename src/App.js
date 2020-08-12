import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <div>About</div>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
            <div>Users</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
