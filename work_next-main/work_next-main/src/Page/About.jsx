import Footer from "../Component/Footer";
import AboutWorknest from "../Component/Our_About";
import { Navigate, useNavigate } from "react-router-dom";
import TransformBussnation from "../Component/TransformBussnation";
import AboutCardDetail from "../Component/Orgchart";
import OrgChart from "../Component/Orgchart";
// import OrgChart from "../Component/AboutCardDetail";

const AboutUs = () => {
  const Navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <header className="relative  mt-[50px] sm:mt-[30]  bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white overflow-hidden ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Background Glow */}
        <div className="absolute inset-0">
          {/* Radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 text-center">
          {/* Soft Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-green-400 mr-2 sm:mr-3 text-base sm:text-lg animate-pulse drop-shadow-md">
                  ✨
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold text-sm sm:text-base drop-shadow-sm tracking-wide">
                Know More About Us
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
            <span className="bg-linear-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
              About Us
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-linear-to-r from-green-300 to-green-100 bg-clip-text mt-2 sm:mt-4">
              Your Vision, Our Expertise
            </span>
          </h1>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed drop-shadow-sm">
              Welcome to{" "}
              <span className="text-green-300 font-semibold">
                WorknestConnect
              </span>
              , your one-stop destination for Digital Marketing, Graphic
              Designing, Web & App Development, IT & AI Solutions, and Business
              Consulting.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
              We empower businesses with modern digital solutions, combining
              creativity, technology, and strategic thinking to help you grow
              your brand and achieve measurable success.
            </p>
          </div>
        </div>

        {/* Floating Glow Dots - Optimized for mobile */}
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-48 h-48 sm:w-72 sm:h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        {/* Small floating dots - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-6 h-6 bg-green-400/40 rounded-full animate-float shadow-lg"></div>
        <div
          className="hidden sm:block absolute top-40 right-32 w-8 h-8 bg-yellow-400/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-40 left-1/4 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 right-16 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 left-20 w-20 h-20 bg-green-300/40 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Float Animation */}
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
        </style>
      </header>

      {/* Our Component */}
      <AboutWorknest />

      <TransformBussnation />
      {/* <OrgChart /> */}
      {/* <AboutCardDetail /> */}
      <OrgChart />
      <Footer />
    </div>
  );
};

export default AboutUs;
