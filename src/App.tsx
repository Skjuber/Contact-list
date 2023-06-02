import React, { useEffect } from "react";
import MainRouter from "./components/MainRouter";
import "./App.scss";

const App: React.FC = () => {
  useEffect(() => {
    const handleWindowBlur = () => {
      document.title = "Vrati se :)";
    };

    const handleWindowFocus = () => {
      document.title = "inskysolutions";
    };

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      // Clean up the event listeners when the component is unmounted
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return <MainRouter />;
};

export default App;
