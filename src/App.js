import React from "react";

import { Routes, Route, useRoutes } from "react-router-dom";

import Home from "./Pages/Home.js";

export default function App() {
    return (
        // <div>
        //   <div className='background'></div>

        // </div>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
}
