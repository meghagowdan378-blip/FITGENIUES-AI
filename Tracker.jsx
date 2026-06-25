import { useState, useEffect } from "react";

function Tracker() {
  const [completedDays, setCompletedDays] = useState(0);

  useEffect(() => {
    const savedDays = localStorage.getItem("completedDays");

    if (savedDays) {
      setCompletedDays(parseInt(savedDays));
    }
  }, []);

  const completeWorkout = () => {
    const newCount = completedDays + 1;

    setCompletedDays(newCount);

    localStorage.setItem(
      "completedDays",
      newCount
    );
  };

  const resetTracker = () => {
    setCompletedDays(0);

    localStorage.setItem(
      "completedDays",
      0
    );
  };

  return (
    <div>
      <h2>AI Fitness Habit Tracker</h2>

      <h3>
        Workouts Completed: {completedDays}
      </h3>

      <button onClick={completeWorkout}>
        Mark Workout Complete
      </button>

      <br />
      <br />

      <button onClick={resetTracker}>
        Reset Tracker
      </button>

      <h3>
        Current Streak: {completedDays} Days
      </h3>
    </div>
  );
}

export default Tracker;