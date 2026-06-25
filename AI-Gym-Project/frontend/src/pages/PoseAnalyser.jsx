import { useEffect, useState } from "react";
import axios from "axios";

function PoseAnalyzer() {
  const [data, setData] = useState({
    exercise: "Squat",
    count: 0,
    score: 0,
    status: "Ready"
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/pose-score"
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Pose Performance Analyzer</h2>

      <h3>Exercise: {data.exercise}</h3>

      <h3>Squats: {data.count}</h3>

      <h3>Score: {data.score}</h3>

      <h3>Status: {data.status}</h3>
    </div>
  );
}

export default PoseAnalyzer;