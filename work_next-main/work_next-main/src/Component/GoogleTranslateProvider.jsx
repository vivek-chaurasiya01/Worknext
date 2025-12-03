import { createContext, useContext, useState, useEffect } from "react";

const TranslateContext = createContext();

export function TranslateProvider({ children }) {
  const [changeLang, setChangeLang] = useState(() => () => {});

  useEffect(() => {
    if (window.googleTranslateInitialized) return;
    window.googleTranslateInitialized = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      const interval = setInterval(() => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) {
          setChangeLang(() => (lang) => {
            combo.value = lang;
            combo.dispatchEvent(new Event("change", { bubbles: true }));
          });
          clearInterval(interval);
        }
      }, 300);
    };

    // Load Google script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // 🔥 REMOVE ALL GOOGLE POPUPS FOREVER
    const killer = setInterval(() => {
      // Remove hover popup
      document
        .querySelectorAll(
          "iframe.goog-te-balloon-frame, iframe.goog-te-banner-frame, iframe.goog-te-menu-frame, iframe.goog-te-gadget-frame"
        )
        .forEach((el) => el.remove());

      // Remove blue background
      document
        .querySelectorAll(".goog-text-highlight")
        .forEach((el) => (el.style.background = "transparent"));
    }, 200);

    return () => clearInterval(killer);
  }, []);

  return (
    <TranslateContext.Provider value={changeLang}>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      {children}
    </TranslateContext.Provider>
  );
}

export const useTranslator = () => useContext(TranslateContext);
