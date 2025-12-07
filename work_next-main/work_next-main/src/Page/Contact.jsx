import { useState } from "react";
import Footer from "../Component/Footer";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlay,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const api_url = import.meta.env.VITE_API_URL;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await axios.post(
        `${api_url}/api/contact/contact`,
        formData
      );

      console.log(response);
      toast.success("Form data saved successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";
      console.log(error);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main">
      <header className="relative bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white  overflow-hidden mt-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaEnvelope className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Reach Out to Our Team
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Contact Us
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl  text-green-400">
              Let’s Build Something <br /> Amazing Together
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            Have a project, question, or idea? Get in touch with us and our team
            will help you turn it into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center bg-linear-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Contact Our Team</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <Link
              to="/services/Digital_Marketing"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Services
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </header>

      <section
        className="min-h-screen bg-white px-4 relative overflow-hidden "
        id="contact"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-green-50 to-blue-50 rounded-full border border-green-200 shadow-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-700 font-semibold text-sm">
                  We're Contact!
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Connect With{" "}
                <span className="bg-linear-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                  Our
                </span>{" "}
                Team Today
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join WorknestConnect and be part of an innovative team that's
                shaping the future of digital solutions. We're looking for
                passionate individuals ready to make an impact.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Fast Growing Company
                  </h3>
                  <p className="text-gray-600">
                    Join a rapidly expanding team with global reach
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">💼</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Career Growth
                  </h3>
                  <p className="text-gray-600">
                    Clear progression paths and skill development
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Global Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Work with clients and teams from around the world
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  50+
                </div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  200+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  15+
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative w-full max-w-4xl mx-auto px-4">
            {/* Floating Blobs */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-300 rounded-full opacity-50 animate-float blur-xl"></div>
            <div
              className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-300 rounded-full opacity-50 animate-float blur-lg"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-12 w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float blur-md"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-green-200">
              {/* Border Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-green-400 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>

              {/* Light Background Pattern */}
              <div className="absolute inset-0 bg-linear-to-br from-green-50 via-blue-50 to-purple-50 opacity-60"></div>
              {/* contact form  */}
              <div className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-extrabold bg-linear-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
                    Submit Your Application
                  </h2>
                  <p className="text-gray-600 mt-2">
                    We respond within 24 hours
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="Full Name"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Mobile + Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                      placeholder="Mobile Number"
                    />

                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                    >
                      <option value="">Select Service</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Graphic Designing">
                        Graphic Designing
                      </option>
                      <option value="Web_Development_&_App_Development">
                        Web Development & App Development
                      </option>
                      <option value="AI & IT Development">
                        AI & IT Development
                      </option>
                      <option value="Business_Consultancy">
                        Business Consultancy
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl"
                    placeholder="Write your message..."
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <div className="absolute top-0 left-0 w-6 h-6 border-3 border-transparent border-t-emerald-200 rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
                          </div>
                          <span className="animate-pulse">Submitting your message...</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              </div>
              {/* conatct form end  */}
            </div>
          </div>
        </div>
      </section>
      {/* Simple Company Info & Social Media Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-200/40 rounded-full blur-3xl opacity-40"></div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Company Info */}
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-4 drop-shadow-sm">
              WorknestConnect
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
              Your trusted digital partner for innovative solutions and business
              growth.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Email */}
              <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200 hover:-translate-y-2">
                <FaEnvelope className="text-4xl text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-800">Email</h3>
                <p className="text-gray-600 mt-2">info@worknestconnect.com</p>
              </div>

              {/* Phone */}
              <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200 hover:-translate-y-2">
                <FaPhone className="text-4xl text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-800">Phone</h3>
                <p className="text-gray-600 mt-2">+974 3117 5515</p>
              </div>

              {/* Location (Updated with Full Address) */}
              <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200 hover:-translate-y-2">
                <FaMapMarkerAlt className="text-4xl text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-800">Location</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  1st Floor, Apartment 4<br />
                  Building No. 33, Street 180
                  <br />
                  Zone 55, Al Rayyan – Doha, Qatar
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h3>

            <div className="flex justify-center flex-wrap gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/worknestconnect"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="w-7 h-7" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF className="w-7 h-7" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://www.x.com"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaTwitter className="w-7 h-7" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube className="w-7 h-7" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@worknestconnect?lang=en"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaTiktok className="w-7 h-7" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/worknestconnect"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center 
        bg-green-600 text-white rounded-full shadow-lg
        hover:bg-green-700 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn className="w-7 h-7" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
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
