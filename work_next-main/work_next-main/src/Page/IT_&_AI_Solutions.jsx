// components/ITAndAISolutions.jsx
import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaRobot,
  FaCloud,
  FaMobile,
  FaServer,
  FaDatabase,
  FaCog,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";
import TechnologySection from "../Component/Expert";

const ITAndAISolutions = () => {
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
      icon: <FaCog className="text-3xl" />,
      title: "Billing & Invoice Software",
      description:
        "Manage your finances with ease using our smart billing and invoicing system. Automate invoices, track payments, and generate accurate financial reports—helping your business save time, reduce errors, and stay fully organized.",
      p: "Your financial workflow—faster, cleaner, smarter.",
      h: "What You’ll Get:",
      features: [
        "✓ Automated Invoice Generation",
        "✓ Real-Time Payment Tracking",
        "✓ Financial Reports & Statements",
        "✓ Multi-User Access",
        "✓ Secure Data Storage",
        "✓ Mobile & Desktop Access",
      ],
      image: "/Billing and Invoice illustration copy.png",
      gradient: "from-indigo-500 to-purple-500",
      results: ["✓ 80% Time Saved", "✓ 99% Accuracy", "✓ Real-time Tracking"],
    },
    {
      id: 2,
      icon: <FaServer className="text-3xl" />,
      title: "Task Management Systems",
      description:
        "Increase your team’s productivity with our smart task management platform. Easily organize projects, assign responsibilities, track real-time progress, and collaborate smoothly—ensuring your teams work faster, clearer, and more efficiently.",
      p: "Your workflow—organized, efficient, unstoppable.",
      h: "What You’ll Get:",
      features: [
        "✓ Project & Task Organization",
        "✓ Team Collaboration Tools",
        "✓ Real-Time Progress Tracking",
        "✓ Deadline & Reminder Alerts",
        "✓ File Sharing & Notes",
        "✓ Mobile & Desktop Access",
      ],
      image: "/Task Management Softwares illustration.png",
      gradient: "from-blue-500 to-cyan-500",
      results: [
        "✓ 60% Productivity Boost",
        "✓ Better Collaboration",
        "✓ On-time Delivery",
      ],
    },
    {
      id: 3,
      icon: <FaDatabase className="text-3xl" />,
      title: "Payroll Management",
      description:
        "Make payroll stress-free with our automated payroll system. Process salaries, handle deductions, manage benefits, and ensure full compliance—quickly, accurately, and without manual errors. Perfect for smooth and reliable employee management.",
      p: "Seamless payroll—every month, every time.",
      h: "What You’ll Get:",
      features: [
        "✓ Automated Salary Processing",
        "✓ Tax & Deduction Management",
        "✓ Benefits & Allowance Setup",
        "✓ Attendance & Leave Integration",
        "Employee Self-Service",
        "Employee Self-Service",
      ],
      image: "/Payroll Management Illustration.png",
      gradient: "from-green-500 to-emerald-500",
      results: [
        "✓ Error-free Processing",
        "✓ Compliance Assurance",
        "✓ Employee Satisfaction",
      ],
    },
    {
      id: 4,
      icon: <FaMobile className="text-3xl" />,
      title: "POS Systems",
      description:
        "Upgrade your retail operations with our modern POS system built for speed, accuracy, and smooth customer service. Manage sales, track inventory, process payments, and access real-time insights—all in one powerful, easy-to-use platform.",
      P: "Efficiency at the counter, clarity in the backend.",
      h: "What You’ll Get:",
      features: [
        "✓ Fast & Secure Billing",
        "✓ Inventory Management",
        "✓ Real-Time Sales Tracking",
        "✓ Multi-Store Support",
        "✓ Payment Gateway Integration",
        "✓ Reporting & Analytics Dashboard",
      ],
      image: "/POS System illustration.png",
      gradient: "from-orange-500 to-red-500",
      results: [
        "✓ Faster Checkout",
        "✓ Better Inventory Control",
        "✓ Sales Growth",
      ],
    },
    {
      id: 5,
      icon: <FaRobot className="text-3xl" />,
      title: "AI Solutions & Chatbots",
      description:
        "Enhance customer experience and streamline operations with intelligent AI tools. From smart chatbots to automated workflows, we help your business respond faster, work smarter, and deliver a more modern, efficient service experience.",
      p: "AI that listens, learns, and delivers.",
      h: "What You’ll Get:",

      features: [
        "✓ AI-Powered Chatbots",
        "Automated Customer Support",
        "✓ Workflow & Process Automation",
        "✓ Machine Learning Integrations",
        "✓ Multilingual Support",
        "✓ Analytics & Performance Insights",
      ],
      image: "/AI and Chatbots Illustration.png",
      gradient: "from-purple-500 to-pink-500",
      results: [
        "✓ 24/7 Customer Support",
        "✓ Process Automation",
        "✓ Data-driven Insights",
      ],
    },
    {
      id: 6,
      icon: <FaCloud className="text-3xl" />,
      title: "SaaS Products Development",
      description:
        "BTransform your ideas into scalable, robust Software-as-a-Service solutions. Our expert development team delivers end-to-end cloud-native products — from concept and design to deployment and growth — tailored to evolve with your business and exceed market expectations.",
      p: "From concept to cloud, we bring ideas to life.",
      h: "What You’ll Get:",
      features: [
        "✓ Scalable Cloud-Native Architecture",
        "✓ End-to-End Product Development",
        "✓ Custom Feature Integration",
        "✓ Custom Feature Integration",
        "✓ Continuous Support & Updates",
        "✓ Market-Ready SaaS Solutions",
      ],
      image: "/Saas Products Illustration.png",
      gradient: "from-teal-500 to-blue-500",
      results: [
        "✓ Scalable Solutions",
        "✓ Market Ready",
        "✓ Future-proof Technology",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 mt-[80px]">
      {/* Header Section */}
      <header className="relative  bg-gradient-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaBrain className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Cutting-Edge IT & AI Solutions
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              IT & AI Solutions
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-gradient-to-r from-green-500 to-green-300 bg-clip-text mt-4">
              That Transform Businesses
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-2xl py-5 md:text-2xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            Harness the power of technology and artificial intelligence to
            automate processes, gain insights, and drive unprecedented business
            growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">
                Start Your Digital Transformation
              </span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Button */}
            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Case Studies
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
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative"
      >
        {/* Soft Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent)] pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white rounded-2xl shadow-md px-6 py-3 mb-5 border border-gray-100">
              <span className="text-green-700 font-semibold">
                🚀 Advanced Solutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
              Our{" "}
              <span className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Stack
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT and AI solutions crafted for performance,
              security, and scalability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className={`
            group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden 
            opacity-0 translate-y-8 transition-all duration-700
            flex flex-col lg:flex-row border border-gray-100
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
          `}
              >
                {/* Left: Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Hover Gradient */}

                    {/* Floating Icon */}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <h3 className="text-3xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-xl font-semibold py-2">{service.p}</p>
                  <p className="text-xl font-semibold py-2">{service.h}</p>

                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-slate-600"
                        >
                          <FaRegCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">
                      Expected Results:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center 
                bg-gradient-to-r from-green-900 to-green-600
                hover:from-green-600 hover:to-green-900 text-white
                font-semibold px-6 py-4 rounded-xl transition-all duration-300
                transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
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

      {/* Technology Stack Section */}
<TechnologySection/>

      {/* Testimonials Section */}

      {/* Final CTA Section */}

      <Footer />
    </div>
  );
};

export default ITAndAISolutions;
