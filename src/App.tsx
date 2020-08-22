import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/components/Layout";
import "antd/dist/antd.css";
import ScrollToTop from "./ScrollToTop";

//Page
import Home from "./views/Home";
import AssetDetail from "./views/AssetDetail";
import Vision from "./views/Vision";
import Whatiswinwin from "./views/Whatiswinwin";
import Services from "./views/Services";
import StandardService from "./views/StandardService";
import Assets from "./views/Assets";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route path="/whatis">
              <Whatiswinwin />
            </Route>
            <Route path="/vision">
              <Vision />
            </Route>
            <Route path="/portfolio">
              <div>ผลงานที่ผ่านมา</div>
            </Route>
            <Route path="/aboutus">
              <div>คณะผู้บริหาร</div>
            </Route>
            <Route exact path="/assets">
              <Assets />
            </Route>
            <Route exact path="/asset/house">
              <Assets />
            </Route>
            <Route exact path="/asset/townhome">
              <Assets />
            </Route>
            <Route exact path="/asset/condominium">
              <Assets />
            </Route>
            <Route exact path="/asset/:name">
              <AssetDetail />
            </Route>
            <Route path="/service">
              <Services />
            </Route>
            <Route path="/standard-service">
              <StandardService />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
