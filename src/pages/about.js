import React from "react";
import Header from "../components/header";
import "./about.css";
import lottie from "lottie-web";
import BottomNav from "../components/bottom-nav";

export default function About() {
  const container = React.useRef(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../about.json"),
    });
  }, []);
  return (
    <>
      <Header />
      <div className="about-svg-holder" ref={container}>
        <div className="about-wrap">
          <p className="content">
            Technologies that I work on React, JavaScript, HTML, CSS, SQL,
            Python and Machine Learning
          </p>
          <div>
            <div
              style={{ display: "flex", flexDirection: "row", margin: "10px" }}
            >
              <img src="../images/react.png" className="me" alt="react" />
              <img src="../images/js.png" className="me" alt="javascript" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", margin: "10px" }}
            >
              <img src="../images/python.png" className="me" alt="python" />
              <img src="../images/sql.png" className="me" alt="sql" />
            </div>
          </div>
          <p className="content">
            I love traveling! and I love taking photos of my travels. You might
            already know by now that I'm a big sucker for skies and sunset. I
            like capturing the realness of nature. I draw so much inspiration
            and energy from the environment around me, and try my best to
            capture the spirit of each moment.
          </p>
          <div></div>
        </div>
      </div>
      <BottomNav/>
    </>
  );
}
