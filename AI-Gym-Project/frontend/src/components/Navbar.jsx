import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>AI Gym</h2>

      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/diet">Diet</Link>
      <Link to="/workout">Workout</Link>
      <Link to="/tracker">Tracker</Link>
      <Link to="/chatbot">Chatbot</Link>
      <Link to="/gymfinder">Gyms</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/pose">Pose AI</Link>
      <Link to="/bmi">BMI Cal</Link>
    </nav>
  );
}

export default Navbar;