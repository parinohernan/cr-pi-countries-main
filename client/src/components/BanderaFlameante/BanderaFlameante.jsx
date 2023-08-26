import React, { useState, useEffect } from "react";
import "./BanderaFlameante.module.css";

const BanderaFlameante = ({ src, alt }) => {
  const [degree, setDegree] = useState(0);
  const amplitude = 5; // Ajusta la amplitud del flameo
  const speed = 1000; // Ajusta la velocidad del flameo (en milisegundos)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDegree = Math.sin(Date.now() / speed) * amplitude;
      setDegree(newDegree);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bandera-container">
      <img src={src} alt={alt} style={{ transform: `rotate(${degree}deg)` }} />
    </div>
  );
};

export default BanderaFlameante;
