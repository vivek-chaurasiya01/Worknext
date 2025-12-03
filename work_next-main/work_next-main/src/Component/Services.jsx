import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Palette,
  MonitorSmartphone,
  Cpu,
  LineChart,
} from "lucide-react";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      icon: <TrendingUp size={90} strokeWidth={1.5} className="text-emerald-300" />,
      services: [
        "SEO optimization for ranking growth",
        "Social media brand building",
        "High-performance Google Ads",
        "Meta Ads for ROI-focused marketing",
      ],
      color: "from-emerald-300 to-green-500",
    },
    {
      id: 2,
      title: "Graphic Designing",
      icon: <Palette size={90} strokeWidth={1.5} className="text-emerald-300" />,
      services: [
        "Premium logo & branding kit",
        "Elegant business cards",
        "Professional pitch decks",
        "Creative brochures & flyers",
      ],
      color: "from-emerald-300 to-green-500",
    },
    {
      id: 3,
      title: "Website & App Development",
      icon: (
        <MonitorSmartphone
          size={90}
          strokeWidth={1.5}
          className="text-emerald-300"
        />
      ),
      services: [
        "Custom website development",
        "Fast & responsive design",
        "iOS / Android app development",
        "Business automation tools",
      ],
      color: "from-emerald-300 to-green-500",
    },
    {
      id: 4,
      title: "IT & AI Solutions",
      icon: <Cpu size={90} strokeWidth={1.5} className="text-emerald-300" />,
      services: [
        "Smart AI-powered solutions",
        "Billing & management software",
        "Task automation systems",
        "Custom SaaS product development",
      ],
      color: "from-emerald-300 to-green-500",
    },
    {
      id: 5,
      title: "Business Consulting",
      icon: <LineChart size={90} strokeWidth={1.5} className="text-emerald-300" />,
      services: [
        "Business setup & structure",
        "PRO & legal process support",
        "Strategic market guidance",
        "Basic HR policy framework",
      ],
      color: "from-emerald-300 to-green-500",
    },
  ];

useEffect(() => {
  setIsVisible(true);

  if (!isAutoPlay) return;

  const interval = setInterval(() => {
    setActiveService((prev) => (prev + 1) % services.length);
  }, 5000);

  return () => clearInterval(interval);
}, [isAutoPlay, services.length]);



  return (
    <section className="py-20  bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white ">
      <div className="xl:max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-bold text-center mb-4 
          text-transparent bg-clip-text bg-linear-to-r 
          from-emerald-300 to-green-400 tracking-wide"
        >
          Our Services
        </h2>

        <p className="text-xl text-center text-emerald-200/70 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
          Smart, modern & result-driven services crafted to grow your business.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveService(index);
                setIsAutoPlay(false);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
              border border-emerald-400/25 backdrop-blur-sm
              ${
                activeService === index
                  ? `bg-linear-to-r ${service.color} text-black shadow-xl scale-105`
                  : "text-emerald-200 hover:bg-emerald-300/10"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div
          className="rounded-3xl p-10 border border-emerald-400/25 
        bg-linear-to-b from-[#033528] via-[#064a3a] to-[#032e23]
         backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,150,0.15)] transition-all"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <div
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="mb-6">{services[activeService].icon}</div>

              <h3
                className="text-4xl font-bold mb-4 text-transparent bg-clip-text 
              bg-linear-to-r from-emerald-300 to-green-400"
              >
                {services[activeService].title}
              </h3>

              <p className="text-emerald-100/80 text-lg leading-relaxed">
                Expert {services[activeService].title.toLowerCase()} designed
                for growth-focused businesses.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className={`transition-all duration-500 delay-150 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid gap-4">
                {services[activeService].services.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 rounded-xl border 
                    border-emerald-400/20 backdrop-blur-sm shadow-lg 
                    hover:bg-emerald-300/10 transition-all duration-300 group"
                  >
                    <div
                      className="w-3 h-3 rounded-full mr-4 bg-linear-to-r 
                      from-emerald-300 to-green-400"
                    ></div>

                    <span className="text-emerald-100/90 group-hover:text-white transition-colors text-[17px] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
