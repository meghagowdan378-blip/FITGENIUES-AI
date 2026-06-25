import { useState, useEffect } from "react";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    age: "",
    weight: "",
    height: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("user");

    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Profile Saved");
  };

  return (
    <div>
      <h2>Profile</h2>

      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />

      <input
        placeholder="Age"
        value={user.age}
        onChange={(e) =>
          setUser({
            ...user,
            age: e.target.value
          })
        }
      />

      <input
        placeholder="Weight"
        value={user.weight}
        onChange={(e) =>
          setUser({
            ...user,
            weight: e.target.value
          })
        }
      />

      <input
        placeholder="Height"
        value={user.height}
        onChange={(e) =>
          setUser({
            ...user,
            height: e.target.value
          })
        }
      />

      <button onClick={saveProfile}>
        Save Profile
      </button>
    </div>
  );
}

export default Profile;