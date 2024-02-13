import Header from "./component/Header";
import Navbar from "./component/Navbar";
import sary from "./assets/hery-removebg.png";

export function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Header image={sary} />
    </div>
  );
}
