import React from "react";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React External Components</h1>

      <h3>Challenge 1</h3>
      <p>
        Import and render this component{" "}
        <a href="https://www.npmjs.com/package/react-animated-weather">
          https://www.npmjs.com/package/react-animated-weather
        </a>
      </p>

      <br />
      <h3>Challenge 2</h3>
      <p>
        Display 3 different icons and change the properties for each of them{" "}
      </p>
      <ReactAnimatedWeather
        icon="FOG"
        color="#000"
        size={48}
        animate={true}
      />
      <ReactAnimatedWeather icon="CLEAR_DAY" color="yellow" size="60" animate={true} />
      <ReactAnimatedWeather icon="WIND" color="pink" size="100" animate={true} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

