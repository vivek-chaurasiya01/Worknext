// import { useTranslator } from "./GoogleTranslateProvider";
import { Globe } from "lucide-react";
import { useState } from "react";
import { useTranslator } from "./GoogleTranslateProvider";

export default function GoogleTranslateButton() {
  const changeLang = useTranslator();
  const [open, setOpen] = useState(false);

  const switchTo = (lang) => {
    if (typeof changeLang === "function") {
      changeLang(lang);
      setOpen(false);
    } else {
      console.log("Google Translate not ready yet...");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          background: "#0d7a4d",
          padding: "0px",
          borderRadius: "50%",
          cursor: "pointer",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Globe color="white" size={22} />
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            right: 0,
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
            width: "140px",
            zIndex: 9999,
          }}
        >
          <p
            onClick={() => switchTo("en")}
            style={{ padding: "8px", cursor: "pointer", fontWeight: 600 }}
          >
            English
          </p>

          <p
            onClick={() => switchTo("ar")}
            style={{ padding: "8px", cursor: "pointer", fontWeight: 600 }}
          >
            Arabic
          </p>
        </div>
      )}
    </div>
  );
}
