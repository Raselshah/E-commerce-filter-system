import "./App.css";
import FilterPage from "./Components/FilterPage/FilterPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <FilterPage />
      <Footer />
    </div>
  );
}

export default App;
