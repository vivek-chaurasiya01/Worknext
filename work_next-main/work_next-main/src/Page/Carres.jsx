import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import TransformBussnationCV from "../Component/TransformBussnationCV";
import {
  TrendingUp,
  Settings,
  Palette,
  Code,
  Megaphone,
  DollarSign,
  Home,
  BookOpen,
  Heart,
} from "lucide-react";

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
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white drop-shadow-sm">
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

      {/* Our Teams Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Teams at{" "}
              <span className="text-green-600">Worknest Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where Talent Meets Purpose
            </p>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              At Worknest Connect, our strength comes from five specialized
              teams working together to deliver end-to-end solutions for our
              clients. Each team plays a critical role in our growth, and we
              continuously hire skilled, passionate professionals to join them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Marketing & Sales Team
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our growth engine—responsible for business development, client
                acquisition, strategic partnerships, and revenue expansion. This
                team drives market positioning, builds relationships, and
                ensures our solutions reach the right audience.
              </p>
              <div className="text-sm text-gray-500 italic">
                Ideal roles: Sales Executives, Business Development Officers,
                Account Managers, Client Relationship Managers.
              </div>
            </div>

            {/* Team 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Operations Team
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The backbone of our organization—ensuring smooth project
                execution, workflow management, quality assurance, vendor
                coordination, and end-to-end service delivery. They transform
                strategies into actionable outcomes.
              </p>
              <div className="text-sm text-gray-500 italic">
                Ideal roles: Operations Executives, Project Coordinators, Admin
                Support, PRO Executives.
              </div>
            </div>

            {/* Team 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Creative Design Team
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Where imagination becomes impact. This team crafts visual
                experiences that define brands—logos, graphics, videos, UI
                layouts, and complete creative systems that capture attention
                and tell powerful stories.
              </p>
              <div className="text-sm text-gray-500 italic">
                Ideal roles: Graphic Designers, Video Editors, UI/UX Designers,
                Motion Designers, Brand Designers.
              </div>
            </div>

            {/* Team 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                IT & AI Solutions Team
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our innovation powerhouse—building intelligent systems, custom
                software, automation tools, websites, apps, and AI-driven
                solutions for clients across industries. This team shapes the
                future of digital transformation.
              </p>
              <div className="text-sm text-gray-500 italic">
                Ideal roles: Full-Stack Developers, AI Engineers, Software
                Developers, QA Testers, Cloud Engineers, Data Analysts.
              </div>
            </div>

            {/* Team 5 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Megaphone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Digital Marketing Team
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The team that drives performance, visibility, and conversions.
                From SEO and paid ads to social media, content, analytics, and
                automation—this team ensures brands grow with measurable
                success.
              </p>
              <div className="text-sm text-gray-500 italic">
                Ideal roles: Digital Marketing Specialists, Social Media
                Managers, PPC Experts, Content Creators, SEO Analysts.
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
        </div>
      </section>
      {/* CTA Section */}
      <TransformBussnationCV />
      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-700 font-semibold text-sm">
                ✨ Employee Benefits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WorknestConnect?
              </span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">
              We offer a comprehensive benefits package and a supportive work
              environment to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Competitive Salary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer industry-leading compensation packages with performance
                bonuses.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Home className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Flexible Work
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Remote, hybrid, or on-site - choose what works best for your
                lifestyle.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <BookOpen className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Learning & Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to training, conferences, and mentorship programs for
                career development.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Heart className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Health & Wellness
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
