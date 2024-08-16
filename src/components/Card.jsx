import React from "react";
import './Card.css';

const Card = ({ data }) => {
  const { name, email, usage, receivePromotions } = data;

  
  const usageLabel = {
    gamer: "Gamer",
    work: "Trabajo en Tecnología",
    hobby: "Hobby"
  }[usage] || "No especificado"; // Valor predeterminado si 'usage' está vacío

  return (
    <div className="card">
      <h2>Información Registrada</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Correo Electrónico:</strong> {email}</p>
      <p><strong>¿Por qué te interesa?:</strong> {usageLabel}</p> {/* Usa 'usageLabel' en lugar de 'usage' */}
      <p><strong>Recibir Promociones:</strong> {receivePromotions ? "Sí" : "No"}</p>
    </div>
  );
};

export default Card;
