import { useState } from "react";
import axios from "axios";

function Workout() {

  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = async () => {

    const response = await axios.get(
      `http://127.0.0.1:8000/workout/${goal}`
    );

    setPlan(response.data);
  };

  return (
    <div>
      <h2>AI Workout Planner</h2>

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        <option value="">
          Select Goal
        </option>

        <option value="muscle">
          Muscle Gain
        </option>

        <option value="fatloss">
          Fat Loss
        </option>

        <option value="maintenance">
          Maintenance
        </option>
      </select>

      <br />
      <br />

      <button onClick={generatePlan}>
        Generate Workout
      </button>

      {plan && (
        <div>
          <h3>Day 1</h3>
          <p>{plan.day1}</p>

          <h3>Day 2</h3>
          <p>{plan.day2}</p>

          <h3>Day 3</h3>
          <p>{plan.day3}</p>
        </div>
      )}
    </div>
  );
}

export default Workout;