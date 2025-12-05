import React from "react";

export default function AboutWorknest() {
  const coreValues = [
    {
      icon: "💡",
      title: "Innovation",
      description: "Using modern technology to improve business processes.",
    },
    {
      icon: "🛡️",
      title: "Reliability",
      description: "Delivering consistent, high-quality service.",
    },
    {
      icon: "🎯",
      title: "Customer Focus",
      description:
        "Understanding client needs and offering tailored solutions.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Maintaining professional standards in every service.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Building long-term trust through clarity and transparency.",
    },
  ];

  const whyChooseUs = [
    {
      number: "1️⃣",
      title: "All-in-One Platform",
      description:
        "All business services — HR, documentation, digital marketing, branding, IT & e-commerce — available in one place.",
    },
    {
      number: "2️⃣",
      title: "Faster & More Efficient Workflows",
      description:
        "Integrated systems and smart tools that save time and eliminate unnecessary delays.",
    },
    {
      number: "3️⃣",
      title: "Affordable & Transparent Pricing",
      description:
        "Quality services designed for SMEs, startups, and corporate companies with no hidden charges.",
    },
    {
      number: "4️⃣",
      title: "Local Expertise in Qatar",
      description:
        "Deep understanding of Qatar's business environment, compliance, cultural needs, and regulations.",
    },
    {
      number: "5️⃣",
      title: "Technology-Driven Solutions",
      description:
        "Modern tools, automation, AI chatbots, and digital strategies to help your business grow.",
    },
    {
      number: "6️⃣",
      title: "Trusted Support Team",
      description:
        "A reliable team always ready to provide guidance, assistance, and customer support whenever needed.",
    },
    {
      number: "7️⃣",
      title: "Proven Results & Impact",
      description:
        "Real improvement in efficiency, online presence, HR workflows, and business performance.",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
              ABOUT US
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7]"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-[#10b981]/10 to-[#34d399]/10 rounded-full blur-3xl"></div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative z-10">
              WorknestConnect is a Qatar-based business solutions company
              offering HR services, documentation support, digital marketing,
              branding, IT solutions, and e-commerce development — all on one
              unified platform.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative z-10">
              Founded in 2025 in Doha, our purpose is simple: to make business
              operations easier, faster, and more affordable. We help SMEs
              (Small and Medium Enterprises), startups, and corporate
              organizations build efficient systems and grow through modern
              technology.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative z-10">
              By combining innovation, quality service, and a customer-first
              approach, we deliver solutions that reduce workload, improve
              productivity, and strengthen business performance.
            </p>
            <p className="text-[#10b981] text-lg md:text-xl font-semibold relative z-10">
              WorknestConnect is the trusted partner for companies in Qatar who
              want to scale, transform digitally, and stay competitive in
              today's fast-changing market.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-linear-to-br from-[#10b981] to-[#34d399] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">OUR MISSION</h3>
            <p className="text-lg leading-relaxed mb-4">
              Our mission is to help businesses work smarter by combining
              essential services with modern technology.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We provide fast, affordable, and integrated solutions in HR,
              documentation, marketing, branding, IT, and e-commerce to support
              the growth of SMEs (Small and Medium Enterprises), startups, and
              corporates in Qatar.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our focus is on simplifying operations, improving efficiency, and
              delivering long-term value to every client.
            </p>
            <p className="text-xl font-bold">
              Making business easier, faster, and smarter.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#10b981]">
            <h3 className="text-3xl font-bold mb-6 text-[#10b981]">
              OUR VISION
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our vision is to become Qatar's leading multi-service business
              platform, empowering SMEs and enterprises to grow through digital
              transformation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We aim to support Qatar's National Vision 2030 by offering simple,
              secure, and innovative solutions that help businesses improve
              operations, adopt technology easily, and build a strong future in
              a rapidly changing market.
            </p>
            <p className="text-xl font-bold text-[#10b981]">
              Building a digital and future-ready business community
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
            CORE VALUES
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#10b981]"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-[#10b981]">
                  {value.title}
                </h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-linear-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
              WHY CHOOSE WORKNESTCONNECT?
            </h3>
            <p className="text-2xl text-gray-700 font-semibold">
              "Everything your business needs — in one reliable platform."
            </p>
            <p className="text-lg text-gray-600 mt-4">
              WorknestConnect is more than a service provider — we are your
              long-term business partner. We offer end-to-end solutions that
              help companies in Qatar work smarter, reduce costs, and grow
              confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#10b981] group"
              >
                <div className="text-3xl mb-4">{item.number}</div>
                <h4 className="text-xl font-bold mb-3 text-[#10b981] group-hover:text-[#059669]">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Team Section */}
        {/* <div className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            TEAM
          </h3>

          <div className="space-y-14">
          
            <div
              className="w-full flex flex-col md:flex-row items-center gap-10
      bg-linear-to-br from-[#032d23] via-[#064737] to-[#02251d]
      p-10 rounded-3xl shadow-2xl border border-emerald-400/20 
      backdrop-blur-xl transition-all duration-700
      animate-[fadeSlideUp_0.8s_ease-out]"
            >
            
              <div className="md:w-1/3 w-full animate-[float_4s_ease-in-out_infinite]">
                <img
                  src="/CEO.webp"
                  alt="Founder"
                  className="rounded-3xl shadow-xl w-full border-2 border-emerald-300/40"
                />
              </div>

              
              <div className="md:w-2/3 w-full text-emerald-100 space-y-4 transition-all duration-700">
                <h4 className="text-3xl font-bold bg-linear-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                  Founder & CEO
                </h4>

                <h5 className="text-xl font-semibold">Mr. Pragya Nand Rai</h5>

                <p className="text-[16px] leading-relaxed opacity-90">
                  Pragyanand Rai leads the vision and direction of
                  WorknestConnect with strategy, innovation and high-quality
                  integrated business solutions.
                </p>

                <div>
                  <h6 className="text-lg font-bold mb-1 text-emerald-300">
                    Role Focus:
                  </h6>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Company vision & strategy</li>
                    <li>• Innovation & digital transformation</li>
                    <li>• Leadership & client partnerships</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 border border-emerald-300/20 shadow-inner">
                  <p className="text-sm italic opacity-85">
                    "At WorkNestConnect, we blend strategy, design, technology,
                    and AI to empower businesses with modern solutions."
                  </p>
                </div>
              </div>
            </div>

          
            <div
              className="w-full flex flex-col md:flex-row-reverse items-center gap-10
      bg-white p-10 rounded-3xl shadow-2xl border-2 border-emerald-400
      transition-all duration-700 animate-[fadeSlideUp_1s_ease-out]"
            >
            
              <div className="md:w-1/3 w-full animate-[float_4s_ease-in-out_infinite]">
                <img
                  src="/Directer2.png"
                  alt="Director"
                  className="rounded-3xl shadow-xl w-full border-2 border-emerald-400/40"
                />
              </div>

            
              <div className="md:w-2/3 w-full text-gray-800 space-y-4 transition-all duration-700">
                <h4 className="text-3xl font-bold text-emerald-600">
                  Managing Director
                </h4>

                <h5 className="text-xl font-semibold">Shivam Kaushal</h5>

                <p className="text-[16px] leading-relaxed opacity-90">
                  Shivam Kaushal brings strong leadership and operational
                  excellence, ensuring smooth service delivery across all
                  business verticals.
                </p>
                <p>
                  At WorkNestConnect, we believe every business in Qatar
                  deserves more than just service delivery—it deserves
                  transformation. That is why we blend strategy, design,
                  technology, and innovation into seamless solutions that
                  elevate brands and accelerate growth. From digital marketing
                  and creative design to web development, IT, AI, and business
                  consulting, we empower our clients with systems that work
                  smarter, look sharper, and create measurable impact. Our
                  commitment is simple: to turn every partnership into progress
                  and every idea into opportunity, shaping a future where
                  businesses across the GCC thrive with confidence and clarity.
                  Shivam Kaushal Managing Director Worknest Connect Consultants
                </p>

                <div className="bg-emerald-100/40 p-5 rounded-2xl border border-emerald-400/20 shadow-inner">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    He focuses on business growth, client relationships, and
                    seamless project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
