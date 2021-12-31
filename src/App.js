import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Projects from './Pages/Projects'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

import Home from './Pages/Home'

import NavBar from './Components/NavBar'

const App = () => {
  let routes = useRoutes([
    { path: "/portfolio", element: <Home /> },
    { path: "/portfolio/projects", element: <Projects /> },
    { path: "/portfolio/services", element: <Services /> },
    { path: "/portfolio/contact", element: <Contact /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <NavBar/>
      <App />
    </Router>
  );
};

export default AppWrapper;