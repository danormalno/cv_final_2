import LeftVerticalBlock from "./components/left-vertical-block/left-vertical-block";
import "./app.css";
import MainSecondBlock from "./components/second-block/main-second-block";

function App() {
  return (
    <div className="most">
      <div className="general-block">
        <div className="main-block">
          <LeftVerticalBlock />
        </div>
        <MainSecondBlock />
      </div>
    </div>
  );
}

export default App;
