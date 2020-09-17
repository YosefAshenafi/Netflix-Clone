import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav";
import Browse from "./Browse";
import Frontpage from "./Frontpage";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontNav from "./FrontNav";
import FrontSection1 from "./FrontSection1";
import FrontSection2 from "./FrontSection2";
import FrontSection3 from "./FrontSection3";
import FrontSection4 from "./FrontSection4";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="app_basicLayout">
          <div className="app__fontLoaded">
            <div className="app__storyDesktop">
              <div className="app__storycontainer">
                <Switch>
                  <Route path="/Browse">
                    <Browse />
                  </Route>
                  <Route path="/">
                    <FrontNav />
                    <Frontpage />
                    <FrontSection1 />
                    <FrontSection2 />
                    <FrontSection3 />
                    <FrontSection4 />
                    <Footer />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
