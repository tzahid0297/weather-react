
import Search from "./Search";
import Date from "./Date";
import Maindescription from "./Maindescription";
import Otherdata from "./Otherdata";
import Forecast from "./Forecast";
import Sourcecode from "./Sourcecode";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weather-wrapper">
        <div className="weatherapp">
          <Search />
          <Date />
          <Maindescription />
          <Otherdata />
          <Forecast />
        </div>
        <Sourcecode />
      </div>
    </div>
  );
}

export default App;
