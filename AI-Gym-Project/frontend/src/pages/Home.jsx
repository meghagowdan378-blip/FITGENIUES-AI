function Home() {

  const streak =
    localStorage.getItem("completedDays") || 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Gym & Fitness Assistant</h1>

      <h3>Current Streak: {streak} Days</h3>

      <div>
        <h3>Modules Available</h3>

        <ul>
          <li>AI Dietician</li>
          <li>Workout Planner</li>
          <li>BMI Calculator</li>
          <li>Habit Tracker</li>
          <li>Fitness Analytics</li>
          <li>Virtual Gym Buddy</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;