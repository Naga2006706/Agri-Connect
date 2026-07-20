import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Market from "./pages/Market";
import Events from "./pages/Events";
import WaterGuide from "./pages/WaterGuide";
import ExpertChat from "./pages/ExpertChat";
import DiseaseDetection from "./pages/DiseaseDetection";
import Challenges from "./pages/Challenges";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Pesticides from "./pages/Pesticides";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="disease" element={<DiseaseDetection />} />
            <Route path="weather" element={<Weather />} />
            <Route path="market" element={<Market />} />
            <Route path="events" element={<Events />} />
            <Route path="water" element={<WaterGuide />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="schemes" element={<GovernmentSchemes />} />
            <Route path="pesticides" element={<Pesticides />} />
            <Route path="expert" element={<ExpertChat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
