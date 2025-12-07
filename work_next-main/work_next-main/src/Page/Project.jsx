import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Eye,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  ArrowRight,
  Play,
  Star,
  Award,
  Users,
  Calendar,
  Handshake,
  Lightbulb,
  Trophy,
  Settings,
  Shield,
  Bot,
  Database,
  Cloud,
  ShoppingCart,
  Search,
  BarChart3,
  CheckCircle,
  ThumbsUp,
} from "lucide-react";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";
import TransformBussnationCV from "../Component/TransformBussnationCV";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Projects", icon: Globe, count: 200 },
    { id: "web", name: "Web Apps", icon: Code, count: 68 },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone, count: 42 },
    { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart, count: 35 },
    { id: "design", name: "UI/UX Design", icon: Palette, count: 28 },
    { id: "marketing", name: "Marketing", icon: TrendingUp, count: 24 },
    { id: "ai", name: "AI/ML", icon: Bot, count: 19 },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "ecommerce",
      description:
        "Complete e-commerce ecosystem with advanced analytics, AI-powered recommendations, and seamless payment integration.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      client: "TechCorp Solutions",
      duration: "6 months",
      year: "2024",
      status: "Completed",
      link: "#",
      featured: true,
      results: "300% increase in sales, 50% faster load times",
      likes: 245,
      views: 1567,
    },
    {
      id: 2,
      title: "Next-Gen Banking Mobile App",
      category: "mobile",
      description:
        "Revolutionary mobile banking application with biometric authentication and AI fraud detection.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Biometric API",
        "ML Kit",
      ],
      client: "FinanceBank International",
      duration: "8 months",
      year: "2024",
      status: "Completed",
      link: "#",
      featured: true,
      results: "1M+ downloads, 4.8 app store rating",
      likes: 312,
      views: 1890,
    },
    {
      id: 3,
      title: "Corporate Brand Identity Suite",
      category: "design",
      description:
        "Complete brand transformation including logo design, brand guidelines, and marketing collaterals.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "After Effects",
      ],
      client: "Global StartupXYZ",
      duration: "4 months",
      year: "2024",
      status: "Completed",
      link: "#",
      featured: false,
      results: "200% brand recognition increase",
      likes: 187,
      views: 1245,
    },
    {
      id: 4,
      title: "AI-Powered Marketing Platform",
      category: "marketing",
      description:
        "Data-driven marketing campaign using machine learning for audience targeting and personalized content delivery.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Google Analytics",
        "Facebook Ads",
        "Python",
        "TensorFlow",
        "Tableau",
      ],
      client: "Fashion Empire Brand",
      duration: "5 months",
      year: "2024",
      status: "Ongoing",
      link: "#",
      featured: false,
      results: "400% engagement increase, 250% ROI",
      likes: 156,
      views: 1123,
    },
    {
      id: 5,
      title: "Healthcare Management Ecosystem",
      category: "web",
      description:
        "Comprehensive healthcare platform with patient management, telemedicine, and medical records integration.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobZM_DcqaKJKjIUOuPN79KA79-pZSTR3s7w&s",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "WebRTC",
        "HIPAA Compliance",
      ],
      client: "MediCare Hospital Network",
      duration: "12 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: true,
      results: "10,000+ patients managed, 95% satisfaction",
      likes: 298,
      views: 1678,
    },
    {
      id: 6,
      title: "Smart Food Delivery Platform",
      category: "mobile",
      description:
        "Intelligent food delivery app with AI route optimization, real-time tracking, and predictive ordering.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Flutter",
        "Firebase",
        "Google Maps API",
        "Machine Learning",
      ],
      client: "FoodieExpress Global",
      duration: "7 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: false,
      results: "500K+ orders, 30% faster delivery",
      likes: 234,
      views: 1456,
    },
    {
      id: 7,
      title: "Enterprise Resource Planning System",
      category: "web",
      description:
        "Custom ERP solution for manufacturing companies with inventory management and financial reporting.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Angular",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      client: "Manufacturing Corp",
      duration: "10 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: true,
      results: "40% operational efficiency increase",
      likes: 276,
      views: 1567,
    },
    {
      id: 8,
      title: "AI Chatbot Customer Service",
      category: "ai",
      description:
        "Intelligent customer service chatbot with natural language processing for 24/7 support.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "TensorFlow", "NLP", "DialogFlow", "REST APIs"],
      client: "Customer Service Solutions",
      duration: "4 months",
      year: "2024",
      status: "Completed",
      link: "#",
      featured: false,
      results: "80% query resolution, 24/7 availability",
      likes: 189,
      views: 1324,
    },
  ];

  const stats = [
    {
      number: "200+",
      label: "Projects Completed",
      icon: Award,
      suffix: "",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: Star,
      suffix: "",
      color: "from-green-500 to-lime-500",
    },
    {
      number: "100+",
      label: "Happy Clients",
      icon: Users,
      suffix: "",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: Calendar,
      suffix: "",
      color: "from-lime-500 to-green-500",
    },
  ];

  const technologies = [
    { name: "React", icon: Code, projects: 45, level: 95 },
    { name: "Node.js", icon: Database, projects: 38, level: 90 },
    { name: "Python", icon: Bot, projects: 32, level: 85 },
    { name: "React Native", icon: Smartphone, projects: 28, level: 88 },
    { name: "AWS", icon: Cloud, projects: 42, level: 92 },
    { name: "MongoDB", icon: Database, projects: 35, level: 87 },
    { name: "Firebase", icon: Shield, projects: 30, level: 85 },
    { name: "Docker", icon: Settings, projects: 25, level: 82 },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Best Web Development Agency 2024",
      description: "Awarded by Tech Excellence Awards",
      year: "2024",
    },
    {
      icon: BarChart3,
      title: "99% Project Success Rate",
      description: "Consistently delivering projects on time and within budget",
      year: "Ongoing",
    },
    {
      icon: Lightbulb,
      title: "Innovation Leader",
      description: "Recognized for cutting-edge technology solutions",
      year: "2023",
    },
    {
      icon: Handshake,
      title: "Client Partnership Excellence",
      description: "Long-term relationships with 95% client retention",
      year: "2024",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-emerald-50/30 mt-[70px]">
      {/* Hero Section - Green Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden  bg-linear-to-b from-[#076950] via-[#188866] to-[#024a38] text-white  ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-300 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-emerald-900/40 to-teal-900/30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Rocket className="w-4 h-4 mr-2 animate-pulse" />
              Explore 200+ Successful Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-green-300 bg-clip-text text-transparent">
                Our Project
              </span>
              <br />
              <span className="text-white">Portfolio Gallery</span>
            </h1>

            <p className="text-lg sm:text-2xl text-green-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover innovative solutions that transformed businesses. Each
              project tells a story of collaboration, technical excellence, and
              measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="mr-3" />
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
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
      </section>

      {/* Stats Section - Green Design */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-md`}
                  >
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Green Cards */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Tech Stack
              </span>{" "}
              Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We master cutting-edge technologies to build scalable and
              future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
                    <tech.icon className="text-xl text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-500">
                      {tech.projects} projects
                    </p>
                  </div>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm font-medium text-green-700">
                    {tech.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Green Grid with Filters */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Explore our curated selection of innovative projects that showcase
              our technical expertise and creative problem-solving approach
            </p>
          </div>

          {/* Search and Filter Bar */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-2"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star className="mr-1" size={14} /> Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm">
                      {
                        categories.find((cat) => cat.id === project.category)
                          ?.name
                      }
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-green-50 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-100 hover:text-green-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-medium bg-green-100 text-green-600 px-3 py-1.5 rounded-lg">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-green-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <ThumbsUp className="mr-1.5" size={16} />{" "}
                        {project.likes}
                      </span>
                      <span className="flex items-center">
                        <Eye className="mr-1.5" size={16} /> {project.views}
                      </span>
                    </div>
                    <span className="font-medium">{project.duration}</span>
                  </div>

                  {/* Results and CTA */}
                  <div className="pt-4 border-t border-green-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-green-600">Client</p>
                        <p className="font-semibold text-gray-900">
                          {project.client}
                        </p>
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all"
                      >
                        <Eye className="mr-2" size={18} />
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Load More Projects
                <ArrowRight className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section - Green Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Recognition and milestones that showcase our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4 shadow-md">
                  <achievement.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                  <CheckCircle className="text-green-500" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Green Theme */}
      <TransformBussnation />
      {/* Process Section - Green Timeline */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A systematic approach that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                icon: Search,
                description:
                  "Understanding requirements and planning the roadmap",
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "02",
                title: "Design & Prototype",
                icon: Palette,
                description: "Creating wireframes and interactive prototypes",
                color: "from-emerald-500 to-teal-500",
              },
              {
                step: "03",
                title: "Development",
                icon: Code,
                description: "Building with clean code and best practices",
                color: "from-teal-500 to-cyan-500",
              },
              {
                step: "04",
                title: "Launch & Support",
                icon: Rocket,
                description: "Deployment and ongoing maintenance",
                color: "from-green-600 to-emerald-600",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 h-full">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${process.color} mb-6 shadow-md`}
                  >
                    <process.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-sm font-bold text-green-600 mb-2">
                    STEP {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 group-hover:from-green-400 group-hover:to-emerald-400 transition-all"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Project;
