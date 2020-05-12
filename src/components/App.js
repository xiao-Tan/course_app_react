import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
