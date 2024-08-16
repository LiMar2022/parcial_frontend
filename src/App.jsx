import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usage: "",
    receivePromotions: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, usage } = formData;

    // Validaciones
    if (name.trim().length < 3 || name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta. El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios.");
      setSubmitted(false);
      return;
    }

    if (email.trim().length < 6 || !email.includes("@")) {
      setError("Por favor chequea que la información sea correcta. El correo electrónico debe tener al menos 6 caracteres y ser válido.");
      setSubmitted(false);
      return;
    }

    if (usage === "") {
      setError("Por favor chequea que la información sea correcta. Debes seleccionar el uso previsto.");
      setSubmitted(false);
      return;
    }

    // Si las validaciones son correctas
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Regístrate en nuestro newsletter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div>
          <label htmlFor="usage">¿Por qué te interesa?:</label>
          <select
            id="usage"
            name="usage"
            value={formData.usage}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="gamer">Gamer</option>
            <option value="work">Trabajo en Tecnología</option>
            <option value="hobby">Hobby</option>
          </select>
        </div>
        <div>
          <label htmlFor="receivePromotions">¿Deseas recibir promociones de artículos tecnológicos?</label>
          <input
            type="checkbox"
            id="receivePromotions"
            name="receivePromotions"
            checked={formData.receivePromotions}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && !error && <Card data={formData} />}
    </div>
  );
}

export default App;
