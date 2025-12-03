import { Routes, Route } from "react-router-dom";
import MainDashBord from "./Dashbord.jsx/MainDashBord";
import Home from "./Dashbord.jsx/Home";
import Contact from "./Dashbord.jsx/Contact";
import Demo from "./Dashbord.jsx/Demo";
import AdminLogin from "./Page.jsx/AdminLogin";
import ChangePasswordForm from "./Dashbord.jsx/ChnagePassword";

function App() {
  return (
    <>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<AdminLogin />} />

        {/* Dashboard With Nested Routes */}
        <Route path="/Dashboard" element={<MainDashBord />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Demo" element={<Demo />} />
          <Route path="ChangePasswordForm" element={<ChangePasswordForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
