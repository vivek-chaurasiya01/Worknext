import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A complete online shopping experience with secure payments and modern UI.",
    img: "https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg?semt=ais_hybrid&w=740&q=80",
    link: "#",
  },
  {
    title: "Business Landing Page",
    desc: "High-end landing page with animations, SEO optimization and clean layout.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A stunning portfolio showcasing projects, skills, and personal branding.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-green-900 text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="block">
            Our Creative Project 
          </span>

        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto  text-xl font-semibold">
          Explore our latest projects crafted with premium designs & modern
          layouts.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((p, index) => (
          <div
            key={index}
            className="
              group 
              bg-white 
              rounded-2xl 
              overflow-hidden 
              border border-gray-200 
              shadow-lg 
              hover:shadow-2xl 
              transition-all duration-500 
              hover:-translate-y-2
            "
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full h-full object-cover 
                  group-hover:scale-110 
                  transition-transform duration-700
                "
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>

              <NavLink
                to="/contact"
                className="
                  inline-flex items-center 
                  text-emerald-600 
                  font-semibold 
                  hover:text-emerald-700 
                  transition
                "
              >
                View Project
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
