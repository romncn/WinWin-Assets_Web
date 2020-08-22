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
            <Route path="/assets">
              <Assets type="ทั้งหมด" />
            </Route>
            <Route path="/asset/house">
              <Assets type="บ้านเดี่ยว" />
            </Route>
            <Route path="/asset/townhome">
              <Assets type="ทาวน์โฮม" />
            </Route>
            <Route path="/asset/condominium">
              <Assets type="คอนโด" />
            </Route>
            <Route path="/asset/:name">
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
