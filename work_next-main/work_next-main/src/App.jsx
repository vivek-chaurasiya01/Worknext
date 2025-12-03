import "./App.css";
import { TranslateProvider } from "./Component/GoogleTranslateProvider";
import SidebarText from "./Component/Lebal";
import Navbar from "./Component/Navbar";
import ScrollToTopOnRoute from "./Component/ScrollToTopOnRoute";
import Router from "./Page/Router";
import ScrollToTopButton from "./Page/ScrollToTop";

function App() {
  return (
    <>
      <TranslateProvider>
        <ScrollToTopOnRoute />
        <SidebarText />
        <Navbar />
        <Router />
        <ScrollToTopButton />
      </TranslateProvider>
    </>
  );
}

export default App;
