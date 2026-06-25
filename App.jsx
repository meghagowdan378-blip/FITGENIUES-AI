import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Diet from "./pages/Diet";
import Workout from "./pages/Workout";
import Tracker from "./pages/Tracker";
import Chatbot from "./pages/Chatbot";
import GymFinder from "./pages/GymFinder";
import Analytics from "./pages/Analytics";
import PoseAnalyzer from "./pages/PoseAnalyser"; // Change if filename differs
import BMI from "./pages/BMI";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/gymfinder" element={<GymFinder />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/pose" element={<PoseAnalyzer />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;