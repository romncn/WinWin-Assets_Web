import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/components/Layout";
import "antd/dist/antd.css";
import ScrollToTop from "./ScrollToTop";

//Page
import Home from "./views/Home";
import AssetDetail from "./views/AssetDetail";
import Vision from "./views/Vision"
import Whatiswinwin from "./views/Whatiswinwin"
import Services from "./views/Services"
import StandardService from "./views/StandardService"

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/whatis">
              <Whatiswinwin/>
            </Route>
            <Route path="/vision">
              <Vision/>
            </Route>
            <Route path="/portfolio">
              <div>ผลงานที่ผ่านมา</div>
            </Route>
            <Route path="/aboutus">
              <div>คณะผู้บริหาร</div>
            </Route>
            <Route path="/assets">
              <div>ทั้งหมด</div>
            </Route>
            <Route path="/asset/house">
              <div>บ้านเดี่ยว</div>
            </Route>
            <Route path="/asset/townhome">
              <div>ทาวน์โฮม</div>
            </Route>
            <Route path="/asset/condominium">
              <div>คอนโดมิเนียม</div>
            </Route>
            <Route path="/asset/:name">
              <AssetDetail />
            </Route>
            <Route path="/service">
              <Services/>
            </Route>
            <Route path="/standard-service">
              <StandardService/>
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
