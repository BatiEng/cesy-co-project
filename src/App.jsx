import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages";
import CoffeePage from "./pages/CoffeePage";
import WorkshopPage from "./pages/WorkshopPage";
import KidsPage from "./pages/KidsPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/kids" element={<KidsPage />} />
      </Routes>
    </div>
  );
}

export default App;
