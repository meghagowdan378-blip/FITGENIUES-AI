import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    let reply = "";

    const msg = message.toLowerCase();

    if (msg.includes("diet")) {
      reply =
        "For muscle gain, eat protein-rich foods like eggs, chicken, milk, and paneer.";
    } else if (msg.includes("workout")) {
      reply =
        "A good beginner workout is Pushups, Squats, Planks, and Running.";
    } else if (msg.includes("weight loss")) {
      reply =
        "For weight loss, maintain a calorie deficit and do cardio regularly.";
    } else if (msg.includes("protein")) {
      reply =
        "Try eggs, chicken breast, fish, milk, paneer, and soy products.";
    } else if (msg.includes("motivate")) {
      reply =
        "Every workout brings you one step closer to your goal. Keep going!";
    } else {
      reply =
        "I am your AI Gym Buddy. Ask me about workouts, diets, weight loss, protein, or fitness.";
    }

    setChat([
      ...chat,
      { sender: "You", text: message },
      { sender: "AI", text: reply }
    ]);

    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Virtual Gym Buddy</h2>

      <div
        style={{
          border: "1px solid gray",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {chat.map((item, index) => (
          <p key={index}>
            <b>{item.sender}:</b> {item.text}
          </p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a fitness question..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default Chatbot;