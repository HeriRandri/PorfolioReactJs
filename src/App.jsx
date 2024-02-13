import Header from "./component/Header";
import Navbar from "./component/Navbar";
import sary from "./assets/hery-removebg.png";

export function App() {
  return (
    <div className=" container-fluid row bg-dark">
      <Navbar />
      <Header image={sary} />
    </div>
  );
}
