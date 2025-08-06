import "./index.css";
import MainScreen from "./screen/main";
import Expertise from "./screen/expertise";
import Work from "./screen/work";
import Professional from "./screen/professional";

function App() {
  return (
    <div className="App">
        <MainScreen/>
        <Expertise/>
        <Work/>
        <Professional/>
    </div>
  );
}

export default App;
