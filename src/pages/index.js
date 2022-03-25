import React from "react";
import "./index.css";
import Header from "../components/header";
import lottie from "lottie-web";


const Main = () => {
  const container = React.useRef(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../girl.json"),
    });
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div ref={container} className="svg"></div>
          <p className="pa">hi there!</p>
          <p className="p">
            I'm Prithvi! I'm a Front End Developer. I'm currently based in
            Ireland, and outside of work, I like to cook and practice sky
            photography! This little slice of the internet shares a bit more
            about my hobbies
          </p>
        </div>
      </div>
      
    </>
  );
}
export default Main;