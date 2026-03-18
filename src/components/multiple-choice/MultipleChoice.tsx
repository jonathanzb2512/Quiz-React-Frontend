// src/components/multiple-choice/MultipleChoice.tsx
import React from "react";
import styles from "../../styles/multiple-choice.module.css";

interface MultipleChoiceProps {
  question?: string;
  options?: string[];
  onAnswer?: (selection: string) => void;
  accentColor?: string; // <--- AGREGAMOS ESTA PROP EN LA INTERFAZ
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  options,
  onAnswer,
  accentColor, // <--- RECIBIMOS LA PROP
}) => {
  // Datos de prueba (se eliminan al conectar JSON)
  const tempQuestion = '¿Cómo se dice "Hay una cocina moderna en mi casa"?';
  const tempOptions = [
    "There are a modern kitchen in my house",
    "There be a modern kitchen in my house",
    "There is a modern kitchen in my house",
  ];

  return (
    <div className={styles.questionWrapper}>
      {/* Tarjeta de la pregunta: El estilo lo cambiamos en el CSS */}
      <div className={styles.questionCard}>
        <p className={styles.questionText}>{question || tempQuestion}</p>
      </div>

      {/* Contenedor de opciones: APLICAMOS EL COLOR DINÁMICO AQUÍ */}
      <div
        className={styles.optionsContainer}
        style={{ borderColor: accentColor }} // <--- EL COLOR DEL NIVEL VA AQUÍ
      >
        {(options || tempOptions).map((option, index) => (
          <button
            key={index}
            className={styles.optionBtn}
            onClick={() => onAnswer && onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
