import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Users, Presentation } from "lucide-react"; // icons

function Home() {
  const [totalContacts, setTotalContacts] = useState(0);
  const [totalDemo, setTotalDemo] = useState(0);
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = async () => {
    const res = await axios.get(`${api_url}/api/contact/contact`);
    setTotalContacts(res.data.data.length);

    const response = await axios.get(`${api_url}/api/demo`);
    setTotalDemo(response.data.data.length);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CONTACT CARD */}
        <div className="bg-white p-7 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Contact Requests</h2>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Users size={30} />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mt-4 mb-2 text-blue-600">
            {totalContacts}
          </h1>

          <p className="text-gray-600 mb-4">
            Total user contact form submissions.
          </p>

          <Link to="/Dashboard/Contact">
            <button className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
              View Contacts
            </button>
          </Link>
        </div>

        {/* DEMO CARD */}
        <div className="bg-white p-7 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Demo Requests</h2>
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <Presentation size={30} />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mt-4 mb-2 text-green-600">
            {totalDemo}
          </h1>

          <p className="text-gray-600 mb-4">
            Total demo requests submitted by users.
          </p>

          <Link to="/Dashboard/demo">
            <button className="bg-green-600 text-white w-full py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition">
              View Demo Requests
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
