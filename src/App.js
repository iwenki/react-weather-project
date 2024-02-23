import './App.css';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
        <footer>
          This project was coded by {""}
          <a
            href="www.linkedin.com/in/vanessa-iwen-040831173"
            target="_blank"
            rel="noreferrer"
          >
            K. Vanessa Iwen
          </a>
          {""} and is open-sourced on {""}
          <a
            href="https://github.com/iwenki/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

