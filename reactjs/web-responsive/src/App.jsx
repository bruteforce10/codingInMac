import "./App.css";
import Analytics from "./component/Analytics";
import Card from "./component/Card";
import { Hero } from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
    </>
  );
}

export default App;
