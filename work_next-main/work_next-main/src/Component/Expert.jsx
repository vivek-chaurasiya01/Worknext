import {
  FaReact,
  FaNode,
  FaPython,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaLink,
  FaShieldAlt,
  FaMobileAlt,
  FaCogs,
  FaCube,
  FaBroadcastTower,
} from "react-icons/fa";

export default function TechnologySection() {
  const techList = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Python", icon: <FaPython /> },
    { name: "AI / ML", icon: <FaBrain /> },
    { name: "Cloud", icon: <FaCloud /> },
    { name: "Database", icon: <FaDatabase /> },
    { name: "API", icon: <FaLink /> },
    { name: "Security", icon: <FaShieldAlt /> },
    { name: "Mobile", icon: <FaMobileAlt /> },
    { name: "DevOps", icon: <FaCogs /> },
    { name: "Blockchain", icon: <FaCube /> },
    { name: "IoT", icon: <FaBroadcastTower /> },
  ];

  return (
    <section className="py-20 bg-[#e9ffe9] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Expertise
          </h2>
          <p className="text-lg md:text-xl text-green-600 max-w-2xl mx-auto leading-relaxed font-semibold">
            Leveraging cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>

        {/* Cards */}
        <div className="py-10 rounded-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techList.map((tech, index) => (
              <div
                key={index}
                className="bg-green-600 rounded-2xl p-6 text-center shadow-lg
                hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-3 text-white flex justify-center">
                  {tech.icon}
                </div>
                <div className="text-sm font-semibold text-white">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
