import { useState } from "react";
import "./work.css";
import illustration from "../assets/illustration.gif";

import newCashApp from "../assets/newCashApp.png";
import musicTube from "../assets/musicTube.png";
import treeApp from "../assets/treeApp.png";
import cashApp from "../assets/cashApp.png";
import hashtag from "../assets/hashtag.png";
import weatherApp from "../assets/weatherApp.png";
import mideaBUD from "../assets/mideaBUD.png";
import shoppingApp from "../assets/shoppingApp.png";
import mockupBarRestaurant from "../assets/mockup-bar-restaurant.jpg";
import mytodo from "../assets/mytodo.png";
import Calculator from "../assets/Calculator.webp";
import AnimateIn from "../components/animateIn";

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: newCashApp,
      title: "Cash App 2",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2025",
    },
    {
      image: musicTube,
      title: "musicTube",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2025",
    },
    {
      image: treeApp,
      title: "Tree App",
      languages: "Kotlin Jetpack Compose",
      year: "2025",
    },
    {
      image: cashApp,
      title: "Cash App",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2024",
    },
    {
      image: shoppingApp,
      title: "Shopping App",
      languages: "React / Redux / JavaScript",
      year: "2024",
    },
    {
      image: hashtag,
      title: "HashTag",
      languages: "React native / JavaScript",
      year: "2023",
    },
    {
      image: weatherApp,
      title: "Weather App",
      languages: "React native / JavaScript",
      year: "2023",
    },
    {
      image: mideaBUD,
      title: "mideaBud",
      languages: "HTML / CSS / JavaScript / nodejs / Express / Mongodb",
      year: "2023",
    },
    {
      image: mockupBarRestaurant,
      title: "Mockup Bar & Restaurant",
      languages: "HTML / CSS",
      year: "2023",
    },
    {
      image: mytodo,
      title: "myTodo",
      languages: "HTML / CSS / JavaScript / Mongodb",
      year: "2023",
    },
    {
      image: Calculator,
      title: "Calculator",
      languages: "HTML / CSS / JavaScript",
      year: "2023",
    },
  ];

  const WorkCard = ({ image, title, languages, year }) => {
    return (
      <div className="work-card">
        <img className="work-card-image" alt={title} src={image} />
        <div className="work-card-text">
          <h2 className="work-card-title">{title}</h2>
          <h5 className="work-card-languages">{languages}</h5>
          <h5 className="work-card-year">{year}</h5>
        </div>
      </div>
    );
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="work">
      <h1 className="workH1">
        My<h1>Work</h1>
      </h1>
      <div className="work-description">
        <div className="work-description-illustration">
          <img
            className="illustration"
            alt="illustration.gif"
            src={illustration}
          />
        </div>
        <h3 className="work-description-text">
          Deployed scalable, responsive web and mobile apps. <br />
          <br />
          Focused on high-performing applications with intuitive and dynamic
          interactions. I also have a passion for data analytics and
          visualization.
        </h3>
      </div>
      <AnimateIn>
        <div className="work-card-section">
          {displayedProjects.map((ele, index) => (
            <WorkCard
              key={index}
              image={ele.image}
              title={ele.title}
              languages={ele.languages}
              year={ele.year}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => setShowAll(!showAll)} className="view-all-btn">
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </AnimateIn>
    </div>
  );
}
