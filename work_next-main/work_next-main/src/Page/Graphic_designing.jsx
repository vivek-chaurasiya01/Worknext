// components/GraphicDesign.jsx
import React, { useEffect, useRef } from "react";
import {
  FaPalette,
  FaBrush,
  FaLayerGroup,
  FaMobile,
  FaPrint,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaPalette className="text-3xl" />,
      title: "Logo Design",
      description:
        "Create unforgettable brand identities with our professional logo designs. We craft unique, memorable logos that capture your brand's essence and make a lasting impression on your audience across all platforms.",
      p: "Your brand, designed to be remembered.",
      features: [
        "Modern Logo Design",
        "Vintage & Retro Logos",
        "Minimalist Logos",
        "3D Logo Design",
        "Mascot Logos",
        "Typography Logos",
      ],
      image: "/logo.png",
      gradient: "from-purple-500 to-pink-500",
      results: [
        "✓ Multiple Concepts",
        "✓ Unlimited Revisions",
        "✓ All File Formats",
      ],
    },
    {
      id: 2,
      icon: <FaBrush className="text-3xl" />,
      title: "Business Stationery",
      description:
        "Create a professional and cohesive brand presence with complete business identity packages. From business cards and letterheads to envelopes and presentation folders, we design everything your brand needs to look established and consistent across all touchpoints.",
      p: "Establish your brand with confidence.",
      features: [
        "Business Cards",
        "Letter Heads",
        "Envelopes",
        "Compliment Slips",
        "Invoice Templates",
        "Presentation Folders",
      ],
      image: "/Business Stationary illustration.png",
      gradient: "from-blue-500 to-cyan-500",
      results: [
        "✓ Print-Ready Files",
        "✓ Digital Versions",
        "✓ Brand Guidelines",
      ],
    },
    {
      id: 3,
      icon: <FaLayerGroup className="text-3xl" />,
      title: "Marketing Materials",
      description:
        "Create eye-catching marketing collateral that turns viewers into customers. From brochures and flyers to posters and catalogs, we design materials that communicate your message clearly, engage your audience, and drive measurable results.",
      p: "Marketing materials that make your brand stand out.",
      features: [
        "Brochures & Flyers",
        "Posters & Banners",
        "Product Catalogs",
        "Company Profiles",
        "Event Materials",
        "Menu Designs",
      ],
      image: "/Marketing material illustration.png",
      gradient: "from-green-500 to-emerald-500",
      results: ["✓ High-Resolution", "✓ Print & Digital", "✓ Multiple Layouts"],
    },
    {
      id: 4,
      icon: <FaMobile className="text-3xl" />,
      title: "Digital Graphics",
      description:
        "Create stunning digital visuals that capture attention and engage your audience. From social media posts and web banners to email signatures and cover images, we design graphics optimized for every platform and device, keeping your brand consistent and memorable.",
      p: "Your brand, beautifully visualized online.",
      features: [
        "Social Media Graphics",
        "Email Signatures",
        "Facebook/LinkedIn Covers",
        "X/Twitter Headers",
        "Digital Ad Designs",
        "Web Banners",
      ],
      image: "/Digital Graphics illustration.png",
      gradient: "from-orange-500 to-red-500",
      results: [
        "✓ Platform Optimized",
        "✓ Mobile Friendly",
        "✓ Brand Consistent",
      ],
    },
    {
      id: 5,
      icon: <FaPrint className="text-3xl" />,
      title: "Print & Ad Design",
      description:
        "Get noticed with professional print and advertisement designs. From magazine and newspaper ads to billboards, vehicle wraps, and trade show graphics, we create visuals that stand out and communicate your message effectively.",
      p: "From page to billboard, designs that deliver.",

      features: [
        "Magazine Ads",
        "Newspaper Ads",
        "Billboard Designs",
        "Vehicle Wraps",
        "Trade Show Graphics",
        "Point of Sale Materials",
      ],
      image: "/Print and Ad Design illustration.png",
      gradient: "from-indigo-500 to-purple-500",
      results: ["✓ CMYK Ready", "✓ Bleed Included", "✓ High Quality"],
    },
    {
      id: 6,
      icon: <FaEnvelope className="text-3xl" />,
      title: "Corporate Identity",
      description:
        "Build a strong, professional corporate image with complete identity packages. From employee IDs and corporate invitations to proposals, reports, and pitch decks, we ensure every touchpoint reflects your brand consistently and professionally.",
      p: "Every detail reflecting your brand’s excellence.",
      features: [
        "Employee ID Cards",
        "Corporate Invitations",
        "Business Proposals",
        "Annual Reports",
        "PowerPoint Templates",
        "Pitch Decks",
      ],
      image: "/Corporate Identity illustration.png",
      gradient: "from-yellow-500 to-amber-500",
      results: ["✓ Full Brand Kit", "✓ Style Guide", "✓ All File Types"],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-orange-50/30 mt-[80px]">
      {/* Header Section */}
      <header className="relative  bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaPalette className="text-yellow-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Award-Winning Graphic Design Agency
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Graphic Design
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent bg-clip-text mt-4">
              That Captivates
            </span>
          </h1>

          <p className="text-xl py-4 md:text-xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            Transform your brand with stunning visual designs that tell your
            story, connect with your audience, and drive real business results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Your Design Project</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:green-yellow-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-500" />
              View Portfolio
            </a>
          </div>

          {/* Trust Indicators */}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-green-300 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 to-transparent pointer-events-none"></div>

        <div className="max-w-[1550px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white rounded-2xl shadow-lg px-6 py-3 mb-6 border border-orange-100">
              <span className="text-orange-600 font-semibold">
                🎨 Creative Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-green-900 to-green-300 bg-clip-text text-transparent">
                Design
              </span>{" "}
              Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From logos to complete brand identities, we create visual
              masterpieces that elevate your brand and captivate your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className={`group bg-white rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden opacity-0 translate-y-8 transition-all duration-700 hover:scale-[1.02] ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex-row border border-orange-50/50`}
              >
                {/* Image Section - Enhanced */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-80 lg:h-[700px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Results Badge */}
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white to-orange-50/30">
                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-lg  leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <p className="text-xl font-semibold py-4 text-green-400">
                    {service.p}{" "}
                  </p>

                  {/* Features List - Enhanced */}
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-5 flex items-center text-lg">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <FaBullseye className="text-orange-600" />
                      </div>
                      Services Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-700 group/feature"
                        >
                          <div className="bg-green-100 p-1 rounded-full mr-3 group-hover/feature:scale-110 transition-transform duration-200">
                            <FaRegCheckCircle className="text-green-600 text-sm" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results Preview */}
                  <div className="bg-linear-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-4 mb-6 border border-orange-200/30">
                    <div className="text-sm font-semibold text-orange-800 mb-2">
                      Package Includes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-orange-200"
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center bg-linear-to-r from-green-900 to-green-600 hover:from-green-600 hover:to-green-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-blue-500/20"
                    >
                      <FaChartLine className="mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TransformBussnation />

      {/* Additional Services Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              Complete <span className="text-green-800">Design</span> Solutions
            </h2>

            <p className="text-xl text-green-600 max-w-2xl mx-auto font-semibold">
              Everything you need for a powerful brand presence across all
              mediums
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🖋️",
                title: "Logo Design",
                items: [
                  "Modern Logos",
                  "Vintage Styles",
                  "Minimalist",
                  "3D Logos",
                  "Mascots",
                  "Typography",
                ],
              },
              {
                icon: "📄",
                title: "Print Materials",
                items: [
                  "Business Cards",
                  "Brochures",
                  "Flyers",
                  "Posters",
                  "Catalogs",
                  "Menus",
                ],
              },
              {
                icon: "💼",
                title: "Corporate Suite",
                items: [
                  "Letter Heads",
                  "Employee IDs",
                  "Invitations",
                  "Proposals",
                  "Reports",
                  "Presentations",
                ],
              },
              {
                icon: "📱",
                title: "Digital Assets",
                items: [
                  "Social Media",
                  "Email Signatures",
                  "Web Banners",
                  "Digital Ads",
                  "Cover Photos",
                  "Headers",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="
            bg-white 
            rounded-2xl 
            border-[3px] border-dotted
            p-6 
            border border-green-600
            shadow-sm
            transition-all duration-300 
            hover:shadow-xl 
            
            hover:-translate-y-2
          "
              >
                {/* Icon */}
                <div className="text-4xl mb-4 text-gray-800 drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-green-900">
                  {category.title}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 font-semibold text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#C8A858] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <Footer />
    </div>
  );
};

export default GraphicDesign;
