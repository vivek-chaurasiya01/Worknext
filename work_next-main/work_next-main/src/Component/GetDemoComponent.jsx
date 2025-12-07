import {
  Globe,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Check,
  CalendarCheck,
  X,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, type: "spring", stiffness: 120 },
  },
};

const iconFloat = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ContactSection() {
  const api_url = import.meta.env.VITE_API_URL;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Input Change
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${api_url}/api/demo`, formData);

      toast.success("Form data saved successfully");

      setIsModalOpen(false);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-2xl shadow-2xl rounded-3xl p-12 max-w-6xl mx-auto border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {/* LEFT SIDE */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3
                  variants={itemVariant}
                  className="text-4xl font-extrabold text-gray-900 mb-10"
                >
                  Get In Touch
                </motion.h3>

                {/* CONTACT LIST */}
                <div className="space-y-6">
                  {[
                    {
                      icon: <Globe size={24} />,
                      title: "Website",
                      value: "www.worknestconnect.com",
                    },
                    {
                      icon: <Mail size={24} />,
                      title: "Email",
                      value: "info@worknestconnect.com",
                    },
                    {
                      icon: <Phone size={24} />,
                      title: "Phone",
                      value: "+974 3117 5515",
                    },
                  ].map((item, i) => (
                    <motion.div
                      variants={itemVariant}
                      key={i}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(16, 185, 129, 0.25)",
                      }}
                      className="flex items-center text-gray-700 p-5 rounded-xl bg-white shadow-sm border hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                    >
                      {/* Icon Animation */}
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-emerald-600 text-white p-3 rounded-xl mr-4 shadow-md"
                      >
                        {item.icon}
                      </motion.div>

                      <div>
                        <div className="font-semibold text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* SOCIAL ICONS */}
                <motion.div variants={itemVariant} className="mt-12">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4">
                    Follow Us
                  </h4>

                  <div className="flex space-x-4">
                    {[
                      {
                        link: "https://www.instagram.com/worknestconnect",
                        icon: <Instagram size={20} />,
                      },
                      {
                        link: "https://www.facebook.com/share/1FYPKKECea/",
                        icon: <Facebook size={20} />,
                      },
                      {
                        link: "https://www.x.com/Worknestconnect",
                        icon: <Twitter size={20} />,
                      },
                      {
                        link: "https://www.youtube.com/@worknestconnect",
                        icon: <Youtube size={20} />,
                      },
                    ].map((s, i) => (
                      <motion.a
                        key={i}
                        variants={iconFloat}
                        initial="initial"
                        animate="animate"
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                        }}
                        href={s.link}
                        target="_blank"
                        className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all"
                      >
                        {s.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3
                  variants={itemVariant}
                  className="text-4xl font-extrabold text-gray-900 mb-10"
                >
                  Why Choose WorknestConnect?
                </motion.h3>

                <div className="space-y-6 mb-12">
                  {[
                    {
                      title: "End-to-End Solutions",
                      desc: "From strategy to execution, we handle everything.",
                    },
                    {
                      title: "Expert Team",
                      desc: "50+ specialists across various domains.",
                    },
                    {
                      title: "Proven Results",
                      desc: "98% client satisfaction rate.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariant}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(16,185,129,0.25)",
                      }}
                      className="flex items-start bg-white border p-5 rounded-xl shadow-sm hover:border-emerald-400 transition-all duration-300"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-emerald-600 text-white p-2 rounded-lg mt-1 mr-4 shadow-md"
                      >
                        <Check size={18} />
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTON */}
                <motion.button
                  variants={itemVariant}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 10px 30px rgba(16,185,129,0.35)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2"
                >
                  <CalendarCheck size={22} />
                  <span>Schedule Consultation</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black/80 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] mt-[100px] overflow-y-auto animate-fade-in"
          >
            <div className="bg-linear-to-r from-emerald-500 to-emerald-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold">Request a Demo</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-emerald-200 transition duration-300 p-1 rounded-full hover:bg-white/10"
              >
                <X className="text-xl" />
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
