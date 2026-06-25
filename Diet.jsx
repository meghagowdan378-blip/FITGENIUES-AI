import { useState } from "react";
import axios from "axios";

function Diet() {
  const [goal, setGoal] = useState("muscle");
  const [diet, setDiet] = useState(null);

  const fetchDiet = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/diet/${goal}`
      );

      setDiet(res.data);
    } catch (error) {
      console.error("Error fetching diet:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Dietician</h2>

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        <option value="muscle">Muscle Gain</option>
        <option value="fatloss">Fat Loss</option>
        <option value="general">Maintenance</option>
      </select>

      <br />
      <br />

      <button onClick={fetchDiet}>
        Generate Diet Plan
      </button>

      {diet && (
        <div style={{ marginTop: "20px" }}>
          <h3>Breakfast</h3>
          <p>{diet.breakfast}</p>

          <h3>Lunch</h3>
          <p>{diet.lunch}</p>

          <h3>Snack</h3>
          <p>{diet.snack}</p>

          <h3>Dinner</h3>
          <p>{diet.dinner}</p>

          <h3>Calories</h3>
          <p>{diet.calories}</p>
        </div>
      )}
    </div>
  );
}

export default Diet;