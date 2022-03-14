import React, { useState } from "react";

import { Routes, Route, useRoutes } from "react-router-dom";

import Home from "./Pages/Home.js";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

import Nav from "./Components/Nav";

export default function App() {
    const [works, setWorks] = useState(false);
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
            </Routes>
        </div>
    );
}
