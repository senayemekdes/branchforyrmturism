import "./styles.css";
import Caredforall from "./components/Caredforall";
import Cardol from "./components/Carsol";
import Description from "./components/Descriptio";
export default function App() {
  return (
    <div className="App">
      <Cardol />
      <Description />
      <Caredforall />
    </div>
  );
}
