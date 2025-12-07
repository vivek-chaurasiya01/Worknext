import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Users, Presentation } from "lucide-react";

function Home() {
  const [totalContacts, setTotalContacts] = useState(0);
  const [totalDemo, setTotalDemo] = useState(0);
  const [ApplyForm, setApplyForm] = useState(0);
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = async () => {
    const res = await axios.get(`${api_url}/api/contact/contact`);
    setTotalContacts(res.data.data.length);

    const response = await axios.get(`${api_url}/api/demo`);
    setTotalDemo(response.data.data.length);

    const applyForm = await axios.get(`${api_url}/api/applications`);
    setApplyForm(applyForm.data.data.length);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Admin Dashboard
      </h1>

      {/* GRID → 1, 2, 3 Columns Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* CONTACT CARD */}
        <div className="bg-white p-7 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Contact Requests</h2>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Users size={30} />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mt-4 mb-2 text-blue-600">
            {totalContacts}
          </h1>

          <p className="text-gray-600 mb-4">Total user contact submissions.</p>

          <Link to="/Dashboard/Contact">
            <button className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
              View Contacts
            </button>
          </Link>
        </div>

        {/* DEMO CARD */}
        <div className="bg-white p-7 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Demo Requests</h2>
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <Presentation size={30} />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mt-4 mb-2 text-green-600">
            {totalDemo}
          </h1>

          <p className="text-gray-600 mb-4">Total demo submission requests.</p>

          <Link to="/Dashboard/demo">
            <button className="bg-green-600 text-white w-full py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition">
              View Demo Requests
            </button>
          </Link>
        </div>

        {/* APPLY FORM CARD */}
        <div className="bg-white p-7 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Apply Form</h2>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <Presentation size={30} />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mt-4 mb-2 text-purple-600">
            {ApplyForm}
          </h1>

          <p className="text-gray-600 mb-4">
            Total job apply form submissions.
          </p>

          <Link to="/Dashboard/ApplyForm">
            <button className="bg-purple-600 text-white w-full py-3 rounded-xl text-lg font-medium hover:bg-purple-700 transition">
              View Apply Forms
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
