import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import FilterPage from "./Components/FilterPage/FilterPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<FilterPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
