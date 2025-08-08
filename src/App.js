import "./index.css";
import MainScreen from "./screen/main";
import Expertise from "./screen/expertise";
import Work from "./screen/work";
import Professional from "./screen/professional";
import ContactMe from "./components/contactMe";
import Connect from "./components/connect";

function App() {
  return (
    <div className="App">
      <MainScreen />
      <Expertise />
      <Work />
      <Professional />
      <div className="footer">
        <ContactMe />
        <Connect />
      </div>
      <p className="copyright">Faysal Mohammed &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
