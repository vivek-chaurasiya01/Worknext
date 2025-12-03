import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import TransformBussnation from "../Component/TransformBussnation";

const CareersPage = () => {
  const Navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative    bg-linear-to-b from-[#088667] via-[#177458] to-[#024a38]
          text-white mt-20 py-24"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large bubbles */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-90 h-90 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          {/* Small floating dots */}
          <span className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-40 right-12 w-3 h-3 bg-green-300/60 rounded-full animate-float"></span>
          <span className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-300/50 rounded-full animate-float"></span>
          <span className="absolute bottom-48 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-1/3 right-1/2 w-2 h-2 bg-green-200/50 rounded-full animate-float"></span>
        </div>

        {/* Glass Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="w-4 h-4 bg-green-400 rounded-full animate-ping absolute -top-1 -right-1"></span>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Join Our Career Opportunities
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            Build Your Career With <br />
            <span className="bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              WorknestConnect
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-sm">
            Join our innovative team and help shape the future of digital
            solutions. We're building cutting-edge platforms that transform
            businesses worldwide. Grow with us and make an impact!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => Navigate("/contact")}
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-green-400 to-green-400 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Explore Open Positions</span>
            </button>

            <a
              href="#services"
              className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-green-300 font-semibold px-8 py-4 rounded-2xl border-2 border-green-400 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Learn About Our Culture</span>
            </a>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                200+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                5★
              </div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}\
      <TransformBussnation />
      {/* Benefits Section */}
      <section id="benefits" className="py-16  bg-[#ffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-green-800">
            Why Join WorknestConnect?
          </h2>
          <p className="text-black text-center max-w-2xl mx-auto mb-12 text-xl font-semibold">
            We offer a comprehensive benefits package and a supportive work
            environment to help you thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Competitive Salary
              </h3>
              <p className="text-gray-600">
                We offer industry-leading compensation packages with performance
                bonuses.
              </p>
            </div>

            <div className="bg-white p-6 text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Flexible Work
              </h3>
              <p className="text-gray-600">
                Remote, hybrid, or on-site - choose what works best for your
                lifestyle.
              </p>
            </div>

            <div className="bg-white p-6  text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Learning & Growth
              </h3>
              <p className="text-gray-600">
                Access to training, conferences, and mentorship programs for
                career development.
              </p>
            </div>

            <div className="bg-white p-6 - text-center border-2 border-dashed rounded-2xl border-green-300  ">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Comprehensive health insurance, gym memberships, and wellness
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareersPage;
