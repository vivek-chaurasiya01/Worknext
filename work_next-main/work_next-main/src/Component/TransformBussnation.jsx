import axios from "axios";
import React, { useState } from "react";
import { FaRocket, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function TransformBussnation() {
  const api_url = import.meta.env.VITE_API_URL;

  const [model, setModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${api_url}/api/demo`, formData);
      toast.success("Data Send Successfully!");
      setModel(false);
      setFormData({
        name: "",
        message: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Main Section */}
      <section className="py-24 bg-gradient-to-b  bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white  relative overflow-hidden">
        {/* Floating Neon Bubbles */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-10 left-10 w-44 h-44 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-12 w-64 h-64 bg-green-500/20 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-52 h-52 bg-teal-400/25 rounded-full blur-2xl animate-float-fast"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-6 z-10 font-semibold">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight bg-gradient-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-2xl mx-auto">
            Let's build something extraordinary together and turn your vision
            into a powerful reality.
          </p>

          {/* Button */}
          <button
            onClick={() => setModel(true)}
            className="mt-10 inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)]"
          >
            Start Your Journey Now
            <FaRocket className="ml-3 text-yellow-300 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {model && (
        <>
          <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .animate-shimmer {
              animation: shimmer 2s infinite;
            }
          `}</style>
        </>)}
      {model && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-xl p-0 animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white p-6 rounded-t-3xl flex justify-between items-center shadow-lg">
              <h2 className="text-2xl font-bold">Request a Demo</h2>

              <button
                onClick={() => setModel(false)}
                className="text-white hover:text-emerald-200 transition p-1 rounded-full hover:bg-white/20"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-100 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-white/30 bg-white/10 text-white rounded-xl px-4 py-3 backdrop-blur-md focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-100 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-white/30 bg-white/10 text-white rounded-xl px-4 py-3 backdrop-blur-md focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                {/* Mobile + Message */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-100 font-medium mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-white/30 bg-white/10 text-white rounded-xl px-4 py-3 backdrop-blur-md focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-100 font-medium mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-white/30 bg-white/10 text-white rounded-xl px-4 py-3 backdrop-blur-md focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  {isLoading ? (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <div className="absolute top-0 left-0 w-6 h-6 border-3 border-transparent border-t-emerald-200 rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
                        </div>
                        <span className="animate-pulse">Sending Request...</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransformBussnation;
