import Weather from "./Weather";
import Sourcecode from "./Sourcecode";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weather-wrapper">
        <div className="weatherapp">
          <Weather defaultCity="Beijing" />
        </div>
        <Sourcecode />
      </div>
    </div>
  );
}

export default App;
