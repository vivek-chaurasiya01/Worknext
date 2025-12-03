import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages
import Home from "./Home";
import AboutUs from "./About";
import Contact from "./Contact";
import CareersPage from "./Carres";
import DemoPage from "./Getdemo";

// Services pages
import DigitalMarketing from "./Digital_marketing";
import GraphicDesign from "./Graphic_designing";
import WebsiteAndAppDevelopment from "./Website_and_App_Development_Service";
import ITAndAISolutions from "./IT_&_AI_Solutions";
import BusinessConsulting from "./Business_Consultings";
import Project from "./Project";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Services */}
        <Route
          path="/services/Digital_Marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/Graphic_designing_services"
          element={<GraphicDesign />}
        />
        <Route
          path="/services/Website_and_App_Development"
          element={<WebsiteAndAppDevelopment />}
        />
        <Route
          path="/services/IT_&_AI_Solutions"
          element={<ITAndAISolutions />}
        />
        <Route
          path="/services/Business_Consultings"
          element={<BusinessConsulting />}
        />

        {/* Other pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/getdemo" element={<DemoPage />} />
        <Route path="/Project" element={<Project />} />

        {/* ⭐ Correct Dashboard Routing */}
      </Routes>
    </>
  );
}

export default Router;
