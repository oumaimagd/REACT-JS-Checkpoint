import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaveBare from "./components/NaveBare";
import { Cardes } from "./components/Cardes";
function App() {
  return (
    <div className="App">
      <NaveBare />
      <br />
      <h1>bootstrap Cards </h1>
      <br />
      <Cardes />
    </div>
  );
}

export default App;
