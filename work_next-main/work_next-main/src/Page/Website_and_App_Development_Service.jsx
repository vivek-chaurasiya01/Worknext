// components/WebsiteAndAppDevelopment.jsx
import React, { useEffect, useRef, } from "react";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaReact,
  FaApple,
  FaAndroid,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Building2, ShoppingCart, Settings, Palette, RefreshCw, Smartphone, FileText, Globe, Target, User, Zap, Store, Receipt, Users, BarChart3, Link2, CreditCard, Glasses, Layers, Rocket, Building } from "lucide-react";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";

const WebsiteAndAppDevelopment = () => {
  const projectCardsRef = useRef([]);

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

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const websiteServices = [
    {
      id: 1,
      title: "Corporate Website Design",
      description:
        "Establish a strong digital identity with polished, professional websites that communicate credibility, showcase your brand, and build trust with clients and stakeholders.",
      Icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "E-commerce Website Development",
      description:
        "Create seamless online shopping experiences with feature-rich e-commerce platforms designed to maximize conversions, streamline product management, and support secure transactions.",
      Icon: ShoppingCart,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Custom Web Application Development",
      description:
        "Bring complex ideas to life with fully bespoke web applications engineered for performance, automation, and scalability—perfect for specialized business workflows.",
      Icon: Settings,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "UI/UX Design & Prototyping",
      description:
        "Craft intuitive user interfaces backed by thoughtful experience design—ensuring your digital platforms are visually refined, user-friendly, and conversion-optimized.",
      Icon: Palette,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Website Revamp & Modernization",
      description:
        "Transform outdated websites with fresh designs, updated architecture, and enhanced performance to match modern digital standards.",
      Icon: RefreshCw,
      gradient: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      title: "Responsive Web Design",
      description:
        "Ensure a flawless viewing experience on every device with layouts that adapt intelligently—delivering speed, readability, and visual consistency across screens.",
      Icon: Smartphone,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      title: "CMS-Based Website Development",
      description:
        "Empower your team with easy content control through flexible, scalable CMS platforms tailored to your publishing needs and workflow.",
      Icon: FileText,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 8,
      title: "Web Portal Development",
      description:
        "Develop secure, multi-functional portals that centralize information and streamline interactions for users, clients, employees, or partners.",
      Icon: Globe,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 9,
      title: "Landing Page Design",
      description:
        "Drive campaigns with high-impact landing pages built for speed, clarity, and conversions—crafted to turn visitors into leads with precision-focused messaging.",
      Icon: Target,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 10,
      title: "Portfolio & Personal Branding Sites",
      description:
        "Showcase work, achievements, and identity through visually compelling, storytelling-driven designs that highlight your unique strengths and personality.",
      Icon: User,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const appServices = [
    {
      id: 1,
      title: "Native App Development",
      description:
        "Deliver unmatched performance with apps built exclusively for iOS or Android. Crafted using platform-specific technologies to ensure superior speed, fluid interactions, and a seamless user experience.",
      Icon: Smartphone,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Cross-Platform App Development",
      description:
        "Create a single application that runs beautifully across both platforms. Built with modern frameworks to reduce development time while maintaining exceptional quality and consistent design.",
      Icon: Zap,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "E-commerce & Marketplace Apps",
      description:
        "Create powerful shopping experiences with intuitive browsing, secure payments, real-time inventory, and smooth checkout flows optimized for both customers and sellers.",
      Icon: Store,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "On-Demand Service Apps",
      description:
        "Build dynamic platforms for ride-booking, food delivery, home services, and more. Features include real-time tracking, scheduling, secure payments, and user/provider interfaces.",
      Icon: Receipt,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Social & Community Apps",
      description:
        "Develop engaging platforms with profiles, messaging, feeds, media sharing, and interaction features designed to bring communities together.",
      Icon: Users,
      gradient: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      title: "SaaS & Subscription Apps",
      description:
        "Launch subscription-driven applications built with scalable architecture, in-app purchases, tiered plans, dashboards, and cloud integrations for long-term business growth.",
      Icon: BarChart3,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      title: "IoT-Enabled Apps",
      description:
        "Connect applications with smart devices, sensors, and automation ecosystems. Ideal for home automation, smart appliances, healthcare devices, and industrial setups.",
      Icon: Link2,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 8,
      title: "Fintech & Payment Apps",
      description:
        "Develop secure mobile financial solutions with digital wallets, payment gateways, transaction tracking, investment tools, and compliance-ready systems.",
      Icon: CreditCard,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 9,
      title: "AR/VR Mobile Apps",
      description:
        "Create immersive augmented and virtual reality experiences for gaming, education, retail, and interactive product demonstrations.",
      Icon: Glasses,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 10,
      title: "Hybrid App Development",
      description:
        "Combine the flexibility of web technologies with native capabilities. An efficient and scalable solution that accelerates deployment without compromising usability or performance.",
      Icon: Layers,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      id: 11,
      title: "Progressive Web App (PWA) Development",
      description:
        "Build fast, app-like web experiences that work across all devices. PWAs offer instant loading, offline capabilities, and effortless accessibility—no download required.",
      Icon: Rocket,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 12,
      title: "Enterprise App Development",
      description:
        "Design secure and scalable applications tailored for internal operations, teams, and workflows. Engineered to handle large data volumes and deliver high reliability for business-critical environments.",
      Icon: Building,
      gradient: "from-slate-500 to-gray-600",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 mt-[80px]">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white overflow-hidden">
        {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-25 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <FaCode className="text-white mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
              <span className="text-white font-semibold drop-shadow-sm">
                Premium Web & App Development
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Website & App Development
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-4">
              Services That Drive Success
            </span>
          </h1>

          {/* Sub Text */}
          <p className="py-4 text-2xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            Transform your digital presence with cutting-edge websites and
            mobile applications designed for performance, user experience, and
            business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-green-800 text-[#fff] hover:bg-green-900 font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Your Project Today</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-white backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-white/30"
            >
              <FaPlay className="mr-3 text-sm text-white" />
              View Our Portfolio
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-white rounded-full animate-bounce shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-white/80 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-white/80 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </header>

      {/* Website Development Services Section */}
      <section
        id="services"
        className="py-5 lg:py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50/30 relative"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center my-16">
            <div className="inline-block bg-white rounded-2xl shadow-md px-6 py-3 mb-5 border border-gray-100">
              <span className="text-blue-700 font-semibold">
                🌐 Website Development
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Website
              </span>{" "}
              Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From corporate websites to complex web applications, we create
              digital experiences that engage users and drive business results.
            </p>
          </div>

          {/* Website Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-blue-400 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <service.Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Services Section */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-2xl shadow-md px-6 py-3 mb-5 border border-gray-100">
              <span className="text-purple-700 font-semibold">
                📱 Mobile App Development
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
              Innovative{" "}
              <span className="bg-gradient-to-r from-purple-800 to-purple-400 bg-clip-text text-transparent">
                Mobile Apps
              </span>{" "}
              for Every Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Native, cross-platform, and hybrid mobile applications that
              deliver exceptional user experiences and drive business growth.
            </p>
          </div>

          {/* App Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-400 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <service.Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
                  >
                    Get Started
                    <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransformBussnation />

      {/* Technology Stack Section */}

      <Footer />
    </div>
  );
};

export default WebsiteAndAppDevelopment;
