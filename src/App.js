/* import React, { useState } from "react";
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
import Calculator from './assets/Calculator.webp' */
import "./index.css";
import MainScreen from "./screen/main";
import Expertise from "./screen/expertise";

function App() {
  /* const [activeTab, setActiveTab] = useState("recent");

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

  const projectsToDisplay = activeTab === "recent" ? recentProjects : allProjects; */

  return (
    <div className="App">
        <MainScreen/>
        <Expertise/>
    </div>
  );
}

export default App;
