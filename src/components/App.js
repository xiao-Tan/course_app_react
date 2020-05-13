import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/course/:slug" component={ManageCoursePage} />
          <Redirect from="/about-page" to="/about" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
