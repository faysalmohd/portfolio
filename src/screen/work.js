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
import plantGallery from "../assets/plantGallery.png";
import AnimateIn from "../components/animateIn";
import Dashboard from "../assets/dashboard.jpg";

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: Dashboard,
      title: "Dashboard",
      languages: "Next.js / JavaScript / TailwindCss",
      year: "2026",
      link: "https://github.com/faysalmohd/analytic-dashboard",
    },
    {
      image: plantGallery,
      title: "plantGallery",
      languages: "React Native / JavaScript",
      year: "2025",
      link: "https://github.com/faysalmohd/plantGallery",
    },
    {
      image: newCashApp,
      title: "Cash App 2",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2025",
      link: "https://github.com/faysalmohd/cash-app-2",
    },
    {
      image: musicTube,
      title: "musicTube",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2025",
      link: "https://github.com/faysalmohd/music-app",
    },
    {
      title: "Album api",
      languages: " JavaScript / NodeJs / ExpressJs / JWT",
      year: "2025",
      link: "https://github.com/faysalmohd/albumProject",
    },
    {
      image: treeApp,
      title: "Tree App",
      languages: "Kotlin Jetpack Compose",
      year: "2025",
      link: "https://github.com/faysalmohd/TreeHouse",
    },
    {
      image: cashApp,
      title: "Cash App",
      languages: "HTML / CSS / JavaScript / Firebase",
      year: "2024",
      link: "https://github.com/faysalmohd/cash-app",
    },
    {
      image: shoppingApp,
      title: "Shopping App",
      languages: "React / Redux / JavaScript",
      year: "2024",
      link: "https://github.com/faysalmohd/shopping-web-app",
    },
    {
      image: hashtag,
      title: "HashTag",
      languages: "React native / JavaScript",
      year: "2023",
      link: "https://github.com/faysalmohd/hashTag",
    },
    {
      image: weatherApp,
      title: "Weather App",
      languages: "React native / JavaScript",
      year: "2023",
      link: "https://github.com/faysalmohd/weather-forecast",
    },
    {
      image: mideaBUD,
      title: "mideaBud",
      languages: "HTML / CSS / JavaScript / nodejs / Express / Mongodb",
      year: "2023",
      link: "https://github.com/faysalmohd/mideabud-v2.0.0",
    },
    {
      image: mockupBarRestaurant,
      title: "Mockup Bar & Restaurant",
      languages: "HTML / CSS",
      year: "2023",
      link: "https://github.com/faysalmohd/mockupBarAndRestaurant",
    },
    {
      image: mytodo,
      title: "myTodo",
      languages: "HTML / CSS / JavaScript / Mongodb",
      year: "2023",
      link: "https://github.com/faysalmohd/todo",
    },
    {
      image: Calculator,
      title: "Calculator",
      languages: "HTML / CSS / JavaScript",
      year: "2023",
      link: "https://github.com/faysalmohd/calculator",
    },
    {
      title: "BAHBAI ",
      languages: "Python / MySQL",
      year: "2022",
      link: "https://github.com/faysalmohd/bahbai",
    },
  ];

  const WorkCard = ({ image, title, languages, year, link }) => {
    return (
      <a className="work-card" href={link} target="_blank" rel="noreferrer">
        {image ? (
          <img className="work-card-image" alt={title} src={image} />
        ) : (
          <p className="work-card-no-image">{title}</p>
        )}
        <div className="work-card-text">
          <h2 className="work-card-title">{title}</h2>
          <h5 className="work-card-languages">{languages}</h5>
          <h5 className="work-card-year">{year}</h5>
        </div>
      </a>
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
              link={ele.link}
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
