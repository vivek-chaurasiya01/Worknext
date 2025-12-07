// components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Digital Marketing", link: "/services/Digital_Marketing" },
    { name: "Graphic Designing", link: "/services/Graphic_designing_services" },
    {
      name: "Web & App Development",
      link: "/services/Website_and_App_Development",
    },
    { name: "IT & AI Solutions", link: "/services/IT_&_AI_Solutions" },
    { name: "Business Consulting", link: "/services/Business_Consultings" },
  ];

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/Careers" },
    { name: "Get Demo", link: "/GetDemo" },
  ];

  return (
    <footer className="bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Glow Animation */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16 text-center lg:text-left">
          {/* Logo + Text + Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="/Footer.png" alt="" className="w-64 mb-4" />

            <p className="text-gray-200 max-w-xs leading-relaxed">
              Digital Marketing, Graphic Designing, Website & App Development,
              IT & AI Solutions, Business Consulting — all under one roof.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 justify-center">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/company/worknestconnect",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/share/1FYPKKECea/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/worknestconnect",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://www.x.com/Worknestconnect",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://www.youtube.com/@worknestconnect",
                },
                {
                  icon: <FaTiktok />,
                  link: "https://www.tiktok.com/@worknestconnect?lang=en",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-green-600
                    text-white
                    p-3
                    rounded-full
                    hover:bg-green-700
                    hover:scale-125
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center text-center lg:text-left">
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-gray-200">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-200">
                {navigation.map((nav, idx) => (
                  <li key={idx}>
                    <Link
                      to={nav.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-green-300 mb-4">
                Contact Info
              </h4>
              <ul className="space-y-4 text-gray-200">
                <li className="flex justify-center lg:justify-start items-center">
                  <FaEnvelope className="mr-2 text-green-400" />
                  <a
                    href="mailto:info@worknestconnect.com"
                    className="hover:text-green-400 transition"
                  >
                    info@worknestconnect.com
                  </a>
                </li>

                <li className="flex justify-center lg:justify-start items-center">
                  <FaMapMarkerAlt className="mr-2 text-green-400 text-3xl" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1st+floor,+Apartment+4+Building+No.+33,+Street+180,+Zone+55,+Al+Rayyan+-+Doha,+Qatar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    1st floor, Apartment 4 Building No. 33, Street 180, Zone 55,
                    Al Rayyan - Doha, Qatar
                  </a>
                </li>

                <li className="flex justify-center lg:justify-start items-center">
                  <FaGlobe className="mr-2 text-green-400" />
                  <a
                    href="https://www.worknestconnect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    www.worknestconnect.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-900/40 pt-6 text-center text-gray-400 text-sm font-semibold">
          {new Date().getFullYear()} © Copyright To WorkNest Connect. Designed
          and Developed by #TeamWorknestConnect
        </div>
      </div>
    </footer>
  );
};

export default Footer;
