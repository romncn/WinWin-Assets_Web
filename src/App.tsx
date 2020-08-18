import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/components/Layout";
import 'antd/dist/antd.css';

//Page
import AssetDetail from "./views/AssetDetail"
import Home from "./views/Home";

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
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
