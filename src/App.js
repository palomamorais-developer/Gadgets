import Gadgets from "./components/Gadgets";
import TimeToday from "./components/TimeToday";
import WelcomeUser from "./components/WelcomeUser";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <WelcomeUser />
      <TimeToday />
      <Gadgets />
    </div>
  );
}
