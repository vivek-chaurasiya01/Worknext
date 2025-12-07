import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

// ⭐ IMPORT ALL JSON ANIMATIONS
import codingAnim from "../assets/Coding.json";
import digitalAnim from "../assets/digital.json";
import graAnim from "../assets/gra.json";
import itAnim from "../assets/it.json";
import bussAnim from "../assets/Buss.json";

function Home_heading() {
  const navigate = useNavigate();

  // ⭐ Animation Mapping
  const animationMap = {
    coding: codingAnim,
    digital: digitalAnim,
    gra: graAnim,
    it: itAnim,
    buss: bussAnim,
  };

  // ⭐ All Services
  const items = [
    {
      name: "Digital Marketing",
      anim: "digital",
      type: "json",
      desc: "Elevate your brand’s digital impact with our advanced marketing solutions. We deliver strategic SEO, refined social media brand management, and performance-driven Google and Meta advertising designed to enhance visibility, strengthen market positioning, and generate high-value leads. Our data-focused approach ensures consistent growth, measurable ROI, and a powerful digital presence that supports long-term business success  Driving visibility, leads, and real business results. ",
      learnMore: "/services/Digital_Marketing",
    },
    {
      name: "Graphic Designing",
      anim: "gra",
      type: "json",
      desc: "We help businesses create a strong, professional brand identity through high-quality, creative graphic design. From logos and print materials to digital assets, our designs align with your brand style, communicate effectively, and engage your target audience. Whether you need modern visuals, corporate documents, or online creatives, we deliver designs with clarity, purpose, and lasting impact.   Designs that communicate your brand with clarity, style, and impact.",
      learnMore: "/services/Graphic_designing_services",
    },
    {
      name: "Web Development",
      anim: "coding",
      type: "json",
      desc: "We help businesses build powerful, responsive websites and mobile applications that captivate users and drive results. From corporate websites and e-commerce platforms to web apps and mobile solutions, our development combines modern design, seamless functionality, and optimized performance. Whether it’s UI/UX design, SEO, or app deployment, we create digital experiences that engage and convert. Digital solutions that deliver seamless experiences and measurable results,",
      learnMore: "/services/Website_and_App_Development",
    },
    {
      name: "AI & IT Solutions",
      anim: "it",
      type: "json",
      desc: "We help businesses transform operations with intelligent AI and IT solutions. From automated billing, payroll, and POS systems to task management, chatbots, and scalable SaaS products, our technology streamlines processes, boosts productivity, and enhances customer experiences. We deliver innovative, reliable, and efficient solutions that empower businesses to operate smarter, faster, and more effectively. ,Smart technology solutions that streamline operations and drive growth. ",
      learnMore: "/services/IT_&_AI_Solutions",
    },
    {
      name: "Business Consulting",
      anim: "buss",
      type: "json",
      desc: "We help businesses launch, manage, and grow with expert consulting across all critical areas. From business setup, PRO services, and market entry guidance to HR policy, IT advisory, and strategic growth planning, we provide actionable insights and hands-on support. Our solutions ensure compliance, operational efficiency, and sustainable growth, empowering businesses to succeed confidently in any market.  Expert guidance to launch, manage, and grow your business with confidence. ",
      learnMore: "/services/Business_Consultings",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      {/* TOP SECTION */}
      <div
        className="
          w-full mt-3
           bg-linear-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white   
          flex flex-col items-center
          text-center 
          relative
          
          pt-[50px]
          min-h-[550px]
          rounded-[28px] sm:rounded-[28px] lg:rounded-[42px]
        "
      >
        {/* MAIN HEADING */}

        <div className="absolute inset-0 bg-[url('/Bulinding.png.jpg')] opacity-10 bg-cover bg-center"></div>
        <h1
          className="
            font-semibold 
            text-2xl sm:text-3xl md:text-4xl 
            lg:text-[50px] xl:text-[58px]
            leading-tight
            max-w-5xl
            mt-16
          "
        >
          <span className="bg-linear-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
            All-In-One Creative, Tech & Business Services
          </span>
          <br />
          <span className="text-white opacity-90">for Modern Enterprises</span>
        </h1>

        {/* PARAGRAPH */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-2xl mt-4 opacity-90">
          Stay ahead with solutions designed for tomorrow — intelligent tools
          and strategies.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="
            mt-6
            px-7 py-3.5 
            bg-linear-to-r from-[#037c5598] to-[#CFFFE9]
            text-black font-semibold
            rounded-full
            shadow-xl shadow-black/40
            text-sm sm:text-lg
            hover:scale-110 
            transition-all duration-300
            mb-[150px]
            sm:mb-[250px]
            lg:mb-[300px]
            relative z-10
          "
        >
          🚀 Get Start
        </button>

        {/* ⭐ JSON ANIMATION SHOW */}
        <Lottie
          animationData={animationMap[items[active].anim]}
          loop={true}
          className="
            flex absolute bottom-0 left-1/2 -translate-x-1/2
            w-[380px] sm:w-[450px] md:w-[500px] lg:w-[650px] xl:w-[700px]
            pb-[200px]
            h-[800px]
            translate-y-[65%]
           sm:translate-y-[62%]
           lg:translate-y-[59%]
            z-0
          "
        />
      </div>

      {/* BUTTONS */}
      <div
        className="
          w-full 
          flex flex-wrap justify-center 
          gap-3 sm:gap-4 lg:gap-6
          py-8
          mt-[120px]
          sm:mt-[200px]
          lg:mt-[250px]
          px-4
          relative
          z-20
        "
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              px-6 py-2.5 
              rounded-full 
              text-sm sm:text-base font-medium
              transition-all duration-300 shadow-md 
              backdrop-blur-lg 
              ${
                active === i
                  ? "bg-black text-white border-2 border-white scale-105"
                  : "bg-transparent text-black border-1px border-black hover:bg-black hover:text-white"
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-0">
        <div
          className="
            max-w-[1500px] 
            mx-auto 
            text-center 
            text-base sm:text-lg md:text-xl
            py-6
            rounded-xl
            leading-relaxed
            text-black 
            font-medium
            shadow-md
          "
        >
          <p className="opacity-90 mb-4">{items[active].desc}</p>
          <button
            onClick={() => navigate(items[active].learnMore)}
            className="px-6 py-2.5 bg-gradient-to-r from-[#013026] to-[#027A55] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home_heading;
