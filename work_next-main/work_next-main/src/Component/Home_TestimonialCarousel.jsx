import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const reviews = [
    {
      name: "Dr. Alaa Abanda",
      company: "MyoPain Medical Center – Doha, Qatar",
      rating: 5,
      comment:
        "Worknest Connect demonstrated exceptional teamwork and a well-structured process. Every step was clearly explained, and they handled everything with remarkable ease. Their organized approach made the entire project smooth and stress-free for us.",
    },
    {
      name: "Mr. Moshahid Reza",
      company: "CEO – Golden Choice Contracting & Services, Doha, Qatar",
      rating: 5,
      comment:
        "We approached Worknest Connect for our company profile, logo design, hiring support, and social media services. What impressed me most was their professionalism and understanding of our business needs. Their creative work and timely delivery helped us present our brand with confidence.",
    },
    {
      name: "Mr. Tabish Zareen",
      company: "Founder – Tabish Zareen Food Delivery Services, Doha, Qatar",
      rating: 5,
      comment:
        "From digital marketing to developing our website and mobile app, Worknest Connect handled everything brilliantly. Their team is reliable, responsive, and genuinely committed to helping businesses grow. They have been a true partner in our journey.",
    },
    {
      name: "Ms. Sara Al-Hammadi",
      company: "Director – Al Hammadi Events & Hospitality, Dubai, UAE",
      rating: 5,
      comment:
        "Worknest Connect transformed our brand identity with fresh ideas and flawless execution. Their marketing strategies helped us reach the right audience quickly. It felt like working with a team that truly cared about our success.",
    },
    {
      name: "Mr. Khalid Farooq",
      company: "Managing Partner – Farooq Technical Solutions, Dubai, UAE",
      rating: 5,
      comment:
        "The team delivered our website and marketing assets exactly as we envisioned. Their communication was clear, deadlines were respected, and the final results exceeded expectations. Worknest Connect has become our go-to agency for all future digital needs.",
    },
    {
      name: "Eng. Marwan Al-Sada",
      company: "Owner – Al Sada Trading & Maintenance, Doha, Qatar",
      rating: 5,
      comment:
        "Worknest Connect brought structure and creativity together in a way that really suited our business. They understood our challenges, proposed practical solutions, and executed everything with precision. Their professionalism truly stands out in the Qatar market.",
    },
    {
      name: "Ms. Rina Joseph",
      company: "Founder – BloomCare Home Nursing Services, Doha, Qatar",
      rating: 5,
      comment:
        "We worked with Worknest Connect for our branding, website, and ongoing digital promotions. Their team was supportive from day one and guided us through each decision. The results helped us build credibility and attract more clients in a short time.",
    },
  ];

  // Auto scroll function
  const startScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);
  };

  const stopScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full mx-auto py-10 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        WorknestConnect Testimonials
      </h2>

      <div
        ref={scrollRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
        className="flex overflow-x-auto no-scrollbar space-x-6 pb-4"
      >
        {[...reviews, ...reviews].map((item, index) => (
          <div
            key={index}
            className="
              min-w-[350px]
              md:min-w-[420px]
              bg-white
              border border-gray-300
              rounded-2xl
              p-6
              shadow-md
              min-h-[280px]
              transition-all
              duration-300
              hover:shadow-xl
              hover:scale-[1.04]
              hover:border-2
              hover:border-green-500
            "
          >
            <div className="font-semibold text-lg">{item.name}</div>
            <div className="text-gray-500 text-sm mb-3">{item.company}</div>

            <div className="flex text-yellow-400 mb-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-600 italic text-sm leading-relaxed">
              "{item.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
