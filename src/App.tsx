import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/components/Layout";

//Page
import AssetDetail from "./views/AssetDetail"

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path="/about">
              {/* <About /> */}
              <div>About</div>
            </Route>
            <Route path="/asset/:name">
              <AssetDetail />
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
