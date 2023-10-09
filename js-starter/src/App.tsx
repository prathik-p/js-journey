import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import "./custom.scss";
import "./App.css";

function App() {
  return (
    <div className="bg p-2">
      <div className="">
        <NavBar />
      </div>
      <ListGroup />
    </div>
  );
}

export default App;
