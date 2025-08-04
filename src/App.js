import React, { useState } from "react";
import profilePic from './assets/Polish_20241005_201716163.png'
import newCashApp from './assets/newCashApp.png'
import musicTube from './assets/musicTube.png'
import treeApp from './assets/treeApp.png'
import cashApp from './assets/cashApp.png'
import hashtag from './assets/hashtag.png'
import weatherApp from './assets/weatherApp.png'
import mideaBUD from './assets/mideaBUD.png'
import shoppingApp from './assets/shoppingApp.png'
import mockupBarRestaurant from './assets/mockup-bar-restaurant.jpg'
import mytodo from './assets/mytodo.png'
import Calculator from './assets/Calculator.webp'
import "./index.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("recent");
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const recentProjects = [
    { img: newCashApp, title: "cashApp 2", tech: "HTML, CSS, JavaScript and Firebase" },
    { img: musicTube, title: "musicTube", tech: "HTML, CSS, JavaScript and Firebase" },
    { img: treeApp, title: "TreeHouse", tech: "Kotlin Jetpack Compose" },
    { img: cashApp, title: "cashApp", tech: "HTML, CSS, JavaScript and Firebase" },
  ];

  const allProjects = [
    ...recentProjects,
    { img: hashtag, title: "Hashtag", tech: "React Native, JavaScript and Firebase" },
    { img: weatherApp, title: "Weather App", tech: "React Native, Async Storage, JavaScript" },
    { img: mideaBUD, title: "MideaBUD", tech: "HTML, CSS, JavaScript, Express, MongoDB" },
    { img: shoppingApp, title: "InstantMart", tech: "React, Redux, CSS" },
    { img: mockupBarRestaurant, title: "MockUp Bar & Restaurant", tech: "HTML and CSS" },
    { img: mytodo, title: "MyToDo", tech: "HTML, CSS, JavaScript, MongoDB" },
    { img: Calculator, title: "Calculator", tech: "HTML, CSS and JavaScript" },
  ];

  const projectsToDisplay = activeTab === "recent" ? recentProjects : allProjects;

  return (
    <div className="App">
      {/* Fullscreen Image */}
      {fullScreenImage && (
        <div id="fullScreenImg" onClick={() => setFullScreenImage(null)}>
          <span>X</span>
          <img src={fullScreenImage} alt="fullscreen" />
        </div>
      )}

      {/* Navbar */}
      <nav>
        <ul id="logo-name">
          <li><img src="../assets/logo.png" alt="logo" /></li>
          <li><p>Faysal Mohammed</p></li>
        </ul>
        <ul>
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">Projects</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>

      {/* Section 1 - Hero */}
      <section id="section1">
        <div>
          <div>
            <img
              onClick={() => setFullScreenImage(profilePic)}
              src= {profilePic}
              alt="my-img"
            />
          </div>
          <div>
            <h4>I am Faysal</h4>
            <h1>Full-stack Developer</h1>
            <p>
              Enthusiastic Full-stack developer, eager to leverage my knowledge and passion for coding to
              contribute effectively in a developer role. Proven ability to adapt quickly,
              work collaboratively, and stay abreast of emerging technologies.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>9<span>+</span></h1>
            <p>Personal Projects</p>
          </div>
          <div>
            <h1>2<span>+</span></h1>
            <p>Full-stack Projects</p>
          </div>
          <div>
            <h1>1</h1>
            <p>Professional Project</p>
          </div>
        </div>
      </section>

      {/* Section 2 - Projects */}
      <section id="section2">
        <h2>My Works</h2>
        <ul id="works">
          <li
            onClick={() => setActiveTab("recent")}
            className={activeTab === "recent" ? "active" : ""}
          >
            Recent
          </li>
          <li
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "active" : ""}
          >
            All
          </li>
        </ul>

        <div className="tabContent active">
          {projectsToDisplay.map((proj, index) => (
            <div key={index}>
              <img
                onClick={() => setFullScreenImage(proj.img)}
                src={proj.img}
                alt={proj.title}
                className="projects"
              />
              <h3>{proj.title}</h3>
              <p>{proj.tech}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
