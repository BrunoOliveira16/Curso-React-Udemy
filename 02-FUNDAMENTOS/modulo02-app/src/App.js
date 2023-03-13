// components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
