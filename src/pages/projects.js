import React from "react";
import Header from "../components/header";
import projectconfig from "../config/projectconfig";
import "./project.css";
import Image from "../components/image";
import BottomNav from "../components/bottom-nav";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="project-wrap">
        {projectconfig.map((item) => {
          return (
            <div className="card">
              {<Image img={item.imgs} />}
              <a
                href={"http://" + item.link}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <p className="name">{item.name}</p>
                <p className="summary">{item.cardsummary}</p>
                <p className="tools">{item.toolused}</p>
              </a>
            </div>
          );
        })}
      </div>
      <BottomNav/>
    </div>
  );
}
