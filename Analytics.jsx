function Analytics() {

  const streak =
    localStorage.getItem("completedDays") || 0;

  return (
    <div>
      <h2>Fitness Analytics</h2>

      <h3>
        Total Workouts Completed:
        {streak}
      </h3>

      <h3>
        Weekly Consistency:
        {Math.min(streak * 10, 100)}%
      </h3>
    </div>
  );
}

export default Analytics;