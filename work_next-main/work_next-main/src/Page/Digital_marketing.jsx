// components/DigitalMarketing.jsx
import React, { useEffect, useRef,  } from "react";
import {
  FaSearch,
  FaHashtag,
  FaPenFancy,
  FaVideo,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaMobile,
  FaShoppingCart,
  FaRocket,
  FaStar,
  FaPlay,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
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
      icon: <FaSearch className="text-3xl" />,
      title: "Search Engine Optimization",
      description:
        "Get found easily on search engines with effective SEO. From technical checks and better content to strong backlinks, we help your business rank higher and bring in consistent organic traffic",
      p: "Visibility that brings real customers.",
      features: [
        "Advanced Keyword Research",
        "Technical SEO Audit",
        "Content Optimization",
        "Authority Link Building",
        "Local SEO",
        "Performance Analytics",
      ],
      image:
        "/SEO Illustration.png",
      gradient: "from-purple-500 to-blue-500",
      results: [
        "↑ 150% Organic Traffic",
        "↑ 200% Keyword Rankings",
        "↑ 300% Lead Generation",
      ],
    },
    {
      id: 2,
      icon: <FaHashtag className="text-3xl" />,
      title: "Social Media Marketing",
      description:
        "Create unforgettable brand experiences across every social platform. Our creative team crafts viral-worthy content, while our strategists build strong communities that convert. From TikTok trends to LinkedIn thought leadership, we make your brand the talk of the town.",
      p: "Connecting your brand with the right audience.",
      features: [
        "Viral Content Creation",
        "Community Management",
        "Influencer Partnerships",
        "Paid Social Campaigns",
        "Social Analytics",
        "Brand Storytelling",
      ],
      image: "/Social Media Marketing Illustration.png",
      gradient: "from-pink-500 to-rose-500",
      results: [
        "↑ 500% Engagement",
        "↑ 300% Followers",
        "↑ 250% Website Clicks",
      ],
    },
    {
      id: 3,
      icon: <FaPenFancy className="text-3xl" />,
      title: "Content Marketing",
      description:
        "Tell your brand’s story in a way that attracts, engages, and converts. We create content that builds trust, strengthens your authority, and guides your audience from interest to loyalty through clear, meaningful communication.",
      p: "Stories that connect, engage, and convert.",
      features: [
        "Strategic Storytelling",
        "Blog & Article Writing",
        "Video Production",
        "Content Distribution",
        "Email Marketing",
        "Content Performance",
      ],
      image:
        "/Content Marketing Illustration.png",
      gradient: "from-green-500 to-teal-500",
      results: [
        "↑ 400% Content Engagement",
        "↑ 250% Time on Site",
        "↑ 180% Conversion Rate",
      ],
    },
    {
      id: 4,
      icon: <FaGoogle className="text-3xl" />,
      title: "Google Ads Mastery",
      description:
        "Google Ads Mastery helps you reach the right customers at the right time with highly targeted, performance-driven campaigns. From search and display to shopping and YouTube, we maximize your ad spend and deliver measurable results that grow your business.",
      p: "Right audience. Right moment. Real results.",
      features: [
        "PPC Campaign Management",
        "Display Network Ads",
        "Shopping Campaigns",
        "YouTube Advertising",
        "Conversion Tracking",
        "ROI Optimization",
      ],
      image:
        "/Google Ads Mastery Illustration.png",
      gradient: "from-blue-500 to-cyan-500",
      results: [
        "↓ 40% Cost Per Click",
        "↑ 350% Conversion Rate",
        "↑ 500% Return on Ad Spend",
      ],
    },
    {
      id: 5,
      icon: <FaFacebook className="text-3xl" />,
      title: "Meta Advertising",
      description:
        "Reach the right audience across Facebook and Instagram with smart, targeted Meta Ads. We create engaging creatives, optimize your campaigns, and use data-driven strategies to increase conversions, boost reach, and grow your business effectively.",
       p:"Engage smarter. Convert faster.",
      features: [
        "Facebook Ads Strategy",
        "Instagram Campaigns",
        "Audience Building",
        "Creative Development",
        "Conversion Optimization",
        "Performance Analysis",
      ],
      image: "/Meta Advertising Illustration.png",
      gradient: "from-indigo-500 to-purple-500",
      results: [
        "↑ 450% Ad Engagement",
        "↓ 35% Cost Per Result",
        "↑ 300% Purchase Conversions",
      ],
    },
    {
      id: 6,
      icon: <FaVideo className="text-3xl" />,
      title: "Video Marketing",
      description:
        "Grab attention and engage your audience with compelling video content. From cinematic brand stories to short-form, shareable videos, we create experiences that build emotional connections, boost engagement, and drive results across all platforms.",
      p: "Videos that capture, engage, and convert",
      features: [
        "Video Production",
        "YouTube SEO",
        "TikTok Marketing",
        "Video Ads",
        "Live Streaming",
        "Video Analytics",
      ],
      image:
        "/Video Marketing Illustration.png",
      gradient: "from-red-500 to-orange-500",
      results: [
        "↑ 600% Video Views",
        "↑ 350% Engagement Rate",
        "↑ 280% Brand Recall",
      ],
    },
  ];


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/30 mt-20">
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
                <FaRocket className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Award-Winning Digital Marketing Agency
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Digital Marketing
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent bg-clip-text mt-4">
              That Drives Results
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-white leading-relaxed drop-shadow-sm">
            We don't just create campaigns - we build digital empires.
            Experience the power of data-driven marketing that transforms your
            business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-linear-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Your Success Story</span>
              <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="#services"
              className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-green-400 backdrop-blur-lg transition-all duration-300 shadow-md hover:shadow-yellow-300/30"
            >
              <FaPlay className="mr-3 text-sm text-green-300" />
              Watch Our Story
            </a>
          </div>

          {/* Trust Indicators */}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute buttom-40 left-32 w-12 h-12 bg-green-400 rounded-full animate-float shadow-lg"
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
                ✨ Premium Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green-700 mb-6">
              Our Magic Formula
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-oklch(44.8% 0.119 151.328) leading-relaxed drop-shadow-sm">
              We combine cutting-edge technology with creative genius to deliver
              marketing solutions that don't just work - they wow.
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
                  <div className="relative h-80 lg:h-170">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${service.grant} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>



                    {/* Results Badge */}
   
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white to-blue-50/30">
                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-lg mb-4  leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <p className="text-xl  font-semibold mb-4  text-green-400">
                    {service.p}
                  </p>
                  {/* Features List - Enhanced */}
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-5 flex items-center text-lg">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <FaBullseye className="text-blue-600" />
                      </div>
                      What You'll Get:
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
                  <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 mb-6 border border-blue-200/30">
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

      {/* Testimonials Section */}

      {/* Final CTA Section */}
      <TransformBussnation />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
