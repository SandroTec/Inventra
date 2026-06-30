import "./App.css";
import { useState } from "react";


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop Dell XPS 15",
      category: "IT Equipment",
      status: "in use",
    },
    {
      id: 2,
      name: "Monitor LG 27 inch",
      category: "IT Equipment",
      status: "available",
    },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");


  function getStatusClass(status) {
    switch (status) {
      case "in use":
        return "status-in-use";
      case "available":
        return "status-available";
      case "broken":
        return "status-broken";
      default:
        return "status-default";
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Category:", category);
    console.log("Status:", status);

    const newItem = {
      id: Date.now(),
      name: name,
      category: category,
      status: status,
    };

    setItems([...items, newItem]);

    resetForm();
  }

  function resetForm() {
    setName("");
    setCategory("");
    setStatus("available");
  }
  
  return (
    <div>
      <h1>Inventra</h1>
     <br/>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} -
            <span className={getStatusClass(item.status)}>  
              {item.status}
            </span> 
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          value={'avialable'}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;