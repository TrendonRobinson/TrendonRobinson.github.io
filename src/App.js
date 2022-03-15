import React, { useState } from "react";

import { Routes, Route, useRoutes } from "react-router-dom";

import Home from "./Pages/Home.js";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import ProjectPage from "./Pages/ProjectPage.js";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const projects = require("./Json/projectInfo.json");
export default function App() {
    const [works, setWorks] = useState(false);

    const Pages = projects.map((element) => {
        return (
            <Route
                exact
                path={`/${element.route}`}
                element={
                    <ProjectPage
                        project={element}
                        works={works}
                        setWorks={setWorks}
                    />
                }
            />
        );
    });
    return (
        <div>
            <Nav classes={`${works ? "show" : "hide"}`} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home works={works} setWorks={setWorks} />}
                />
                <Route
                    exact
                    path="/works"
                    element={<Work works={works} setWorks={setWorks} />}
                />
                <Route
                    exact
                    path="/about"
                    element={<About works={works} setWorks={setWorks} />}
                />
                <Route
                    exact
                    path="/contact"
                    element={<Contacts works={works} setWorks={setWorks} />}
                />
                {Pages}
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}
