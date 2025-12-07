import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function SidebarText() {
  return (
    <>
      {/* RIGHT SOCIAL ICONS */}
      <div
        className="
          hidden [@media(min-width:930px)]:flex
          fixed right-0 top-1/2 -translate-y-1/2
          flex-col gap-4 pr-2 z-50
        "
      >
        {[
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/worknestconnect/",
          },
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/share/1FYPKKECea/",
          },
          { icon: <FaWhatsapp />, link: "https://wa.me/97431175515" },
          { icon: <FaTwitter />, link: "https://www.x.com/Worknestconnect" },
          {
            icon: <FaTiktok />,
            link: "https://www.tiktok.com/@worknestconnect?lang=en",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="
              bg-green-600 p-3 rounded-full text-white text-xl
              shadow-lg hover:bg-green-700 hover:scale-110
              transition-all
            "
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
}
