import axios from "axios";
import React, { useState } from "react";
import { FaRocket, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function TransformBussnationCV() {
  const api_url = import.meta.env.VITE_API_URL;

  const [model, setModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    qualification: "",
    cv: null,
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

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("message", formData.message);
    data.append("qualification", formData.qualification);
    data.append("cv", formData.cv);

    try {
      await axios.post(`${api_url}/api/apply`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Data Sent Successfully!");
      setModel(false);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        qualification: "",
        cv: null,
      });
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#064d3a] via-[#0b3f31] to-[#033129] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-6 font-semibold">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Start Your Career Journey With Us
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Join a growing team and build your future. Submit your details &
            upload your CV to apply for the best opportunities.
          </p>

          <button
            onClick={() => setModel(true)}
            className="mt-10 inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply Now
            <FaRocket className="ml-3 text-yellow-300 animate-pulse" />
          </button>
        </div>
      </section>

      {/* MODAL */}
      {model && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-slideUp">
            {/* MODAL HEADER */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-t-3xl flex justify-between items-center shadow-lg">
              <h2 className="text-2xl font-bold tracking-wide">
                Apply For Opportunity
              </h2>

              <button
                onClick={() => setModel(false)}
                className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 space-y-5">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* INPUT FIELDS */}
                {["name", "email", "mobile", "message", "qualification"].map(
                  (field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-emerald-400 outline-none transition"
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                    />
                  )
                )}

                {/* FILE UPLOAD */}
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 file:bg-emerald-600 file:border-none file:px-4 file:py-2 file:mr-4 file:rounded-md"
                />

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-400 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.03] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  {isLoading ? (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <div className="absolute top-0 left-0 w-6 h-6 border-3 border-transparent border-t-emerald-200 rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
                        </div>
                        <span className="animate-pulse">Submitting Application...</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION CSS */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default TransformBussnationCV;
