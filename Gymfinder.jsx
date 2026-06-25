import { useState } from "react";
import axios from "axios";

function GymFinder() {
  const [city, setCity] = useState("");
  const [gyms, setGyms] = useState([]);

  const findGyms = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/gyms/${city}`
      );

      setGyms(response.data.gyms);
    } catch (error) {
      console.log(error);
      alert("Cannot connect to backend");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gym Finder</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={findGyms}>
        Search
      </button>

      <div>
        {gyms.length > 0 ? (
          gyms.map((gym, index) => (
            <div key={index}>
              <h3>{gym}</h3>
            </div>
          ))
        ) : (
          <p>No gyms found</p>
        )}
      </div>
    </div>
  );
}

export default GymFinder;