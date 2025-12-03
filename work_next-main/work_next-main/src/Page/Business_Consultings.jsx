// components/BusinessConsulting.jsx
import React, { useEffect, useRef } from "react";
import {
  FaBuilding,
  FaUsers,
  FaFileContract,
  FaCogs,
  FaArrowRight,
  FaChartBar,
  FaPlay,
  FaRegCheckCircle,
  FaGlobeAmericas,
  FaUserTie,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";

const BusinessConsulting = () => {
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
      icon: <FaBuilding className="text-3xl" />,
      title: "Business Setup Support",
      description:
        "Launch your business with confidence through our complete setup and advisory services. We guide you through company registration, legal compliance, documentation, and strategic planning to ensure a smooth and hassle-free start to your operations..",
      p: "Start Strong. Grow Without Limits.",
      features: [
        "Company Registration",
        "Legal Structure Advisory",
        "License & Permit Assistance",
        "Bank Account Setup",
        "Office Space Guidance",
        "Initial Business Planning",
      ],
      image: "/Business Setup Support illustration.png",
      gradient: "from-blue-500 to-cyan-500",
      results: [
        "✓ Faster Setup Process",
        "✓ Compliance Assurance",
        "✓ Strategic Foundation",
      ],
    },
    {
      id: 2,
      icon: <FaFileContract className="text-3xl" />,
      title: "PRO Services",
      description:
        "Simplify your government interactions with our end-to-end Professional PRO solutions. We manage all official procedures, documentation, and compliance requirements, ensuring seamless operations and efficient employee management. From visas to approvals, we handle every detail with precision.",
      p: "We Handle the Formalities—You Focus on Growth.",

      features: [
        "Government Liaison Services",
        "Visa & Immigration Processing",
        "License Renewals",
        "Document Attestation",
        "Labor Contract Processing",
        "Municipality Approvals",
      ],
      image: "/PRO services Illustration.png",
      gradient: "from-green-500 to-emerald-500",
      results: [
        "✓ Time Saving",
        "✓ Error-free Documentation",
        "✓ Faster Approvals",
      ],
    },
    {
      id: 3,
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Market Entry Guidance",
      description:
        "Enter the region’s fast-growing business landscape with clarity and confidence. Our market entry solutions provide deep local insights, competitive intelligence, and strategic guidance to help you establish a strong and compliant presence from day one.",
      p: "Enter new markets with clarity, strategy, and certainty.",
      features: [
        "Market Research & Analysis",
        "Competitor Intelligence",
        "Entry Strategy Development",
        "Local Partnership Identification",
        "Risk Assessment",
        "Implementation Planning",
      ],
      image: "/Market Entry Guidance Illustration.png",
      gradient: "from-purple-500 to-pink-500",
      results: [
        "✓ Reduced Entry Risks",
        "✓ Market Understanding",
        "✓ Strategic Positioning",
      ],
    },
    {
      id: 4,
      icon: <FaUsers className="text-3xl" />,
      title: "HR Policy Basics",
      description:
        "Build a compliant, efficient, and people-first organization with expertly crafted HR policies. We develop clear, comprehensive handbooks and procedures that align with local labor regulations while enhancing employee experience and operational consistency.",
      p: "Clarity, compliance, and culture—crafted for your organization.",
      features: [
        "Employee Handbook Development",
        "Recruitment Policies",
        "Performance Management Systems",
        "Compensation Structures",
        "Employee Relations Guidelines",
        "Compliance Documentation",
      ],
      image: "/HR Policy Basics Illustration.png",
      gradient: "from-orange-500 to-red-500",
      results: [
        "✓ Legal Compliance",
        "✓ Employee Satisfaction",
        "✓ Clear Guidelines",
      ],
    },
    {
      id: 5,
      icon: <FaCogs className="text-3xl" />,
      title: "IT Setup & Advisory",
      description:
        "Enhance your technology infrastructure with smart, reliable systems that support your business growth. We help you choose the right tools, set up secure systems, and upgrade your digital capabilities so your operations run smoothly and stay future-ready.",
      p: "Smart technology foundations for tomorrow-ready businesses.",

      features: [
        "IT Infrastructure Planning",
        "Software Selection Advisory",
        "Digital Transformation Strategy",
        "Cybersecurity Assessment",
        "Cloud Solutions Guidance",
        "Technology Roadmap Development",
      ],
      image: "/IT Setup and Advisory Illustration.png",
      gradient: "from-indigo-500 to-purple-500",
      results: [
        "✓ Optimized Technology",
        "✓ Cost Efficiency",
        "✓ Future-ready Setup",
      ],
    },
    {
      id: 6,
      icon: <FaChartBar className="text-3xl" />,
      title: "Business Strategy & Growth",
      description:
        "Drive your business forward with strategic guidance designed for long-term success. We create tailored growth plans, improve your operations, and help you make confident decisions that strengthen your market position and support sustainable expansion.",
      p: "Shaping your vision into measurable success.",
      features: [
        "Strategic Planning",
        "Business Model Optimization",
        "Growth Strategy Development",
        "Performance Metrics Setup",
        "Operational Efficiency Analysis",
        "Expansion Planning",
      ],
      image: "/Business Strategy and Growth illustration.png",
      gradient: "from-teal-500 to-blue-500",
      results: [
        "✓ Sustainable Growth",
        "✓ Competitive Advantage",
        "✓ Performance Improvement",
      ],
    },
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "In-depth understanding of your business needs and challenges",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Customized solutions and strategic planning",
      icon: "📊",
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "Hands-on assistance in executing the plans",
      icon: "🚀",
    },
    {
      step: "04",
      title: "Performance Monitoring",
      description: "Continuous evaluation and optimization",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/30 mt-[70px]">
      {/* Header Section */}
      <header className="relative bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white  overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaUserTie className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Expert Business Consulting Services
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Business Consulting
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-linear-to-r from-green-500 to-green-300 bg-clip-text mt-4">
              That Drives Growth
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-2xl md:text-xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            Transform your business vision into reality with our comprehensive
            consulting services. From setup to expansion, we provide the
            expertise you need to succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-linear-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Your Business Journey</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Button */}
            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              View Success Stories
            </a>
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

      {/* Services Section */}
      <section
        id="services"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="max-w-[1550px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white rounded-2xl shadow-lg px-6 py-3 mb-6 border border-blue-100">
              <span className="text-green-600 font-semibold">
                💼 Professional Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
                Consulting
              </span>{" "}
              Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business consulting services designed to guide you
              through every stage of your business journey, from inception to
              expansion.
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
                } flex flex-col lg:flex-row border border-blue-50/50`}
              >
                {/* Image Section - Enhanced */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white to-blue-50/30">
                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <p className="text-xl py-4 text-black font-semibold ">
                    {service.p}
                  </p>

                  {/* Features List - Enhanced */}
                  <div className="mb-8">
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
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 mb-6 border border-blue-200/30">
                    <div className="text-sm font-semibold text-blue-800 mb-2">
                      Expected Outcomes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-blue-200"
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
                      <FaChartBar className="mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Get Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransformBussnation />

      {/* Consulting Process Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Consulting
              </span>{" "}
              Process
            </h2>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A structured approach to ensure your business achieves its goals
              efficiently and effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="relative h-full flex flex-col">
                {/* Horizontal Connector Line (Desktop Only) */}
                {index < consultingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-emerald-300/40 z-0"></div>
                )}

                {/* Card */}
                <div className="relative z-10 bg-white rounded-2xl p-6 text-center border border-slate-200 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 group shadow-md hover:shadow-xl flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-linear-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white">{step.icon}</span>
                    </div>

                    {/* Step Number */}
                    <div className="text-sm font-semibold text-emerald-700 mb-2">
                      Step {step.step}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsulting;
