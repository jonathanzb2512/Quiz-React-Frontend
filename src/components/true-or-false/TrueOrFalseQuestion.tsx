import React from "react";
import styles from "../../styles/true-false.module.css";
import { useTrueOrFalse } from "../../hooks/useTrueOrFalse"; // Asegúrate de que la ruta sea correcta

// Imports de imágenes
import btnTrue from "../../assets/true.png";
import btnNg from "../../assets/ng.png";
import btnFalse from "../../assets/false.png";
import btnTrueG from "../../assets/trueG.png";
import btnNgG from "../../assets/ngG.png";
import btnFalseG from "../../assets/falseG.png";
import type { TrueOrFalseAnswer } from "../../interfaces/true-or-false-answer.type";

interface TrueOrFalseQuestionProps {
  questionText: string;
  onAnswer?: (value: TrueOrFalseAnswer) => void;
}

const TrueOrFalseQuestion: React.FC<TrueOrFalseQuestionProps> = ({
  questionText,
  onAnswer,
}) => {
  // 1. EXTRAEMOS LA LÓGICA DEL HOOK
  // Por ahora dejamos "true" fijo, pero luego lo traeremos del JSON
  const { state, selected, handleAnswer } = useTrueOrFalse("true", onAnswer);

  // Esta función se queda aquí porque es lógica de "Vista"
  const getImage = (type: TrueOrFalseAnswer) => {
    if (state === "wrong") {
      if (type === "true") return btnTrueG;
      if (type === "ng") return btnNgG;
      if (type === "false") return btnFalseG;
    }
    if (type === "true") return btnTrue;
    if (type === "ng") return btnNg;
    return btnFalse;
  };

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.questionCard}>
        <p className={styles.questionText}>{questionText}</p>
      </div>

      <div
        className={`${styles.optionsContainer} ${
          state === "reset" ? styles.exitAnimation : ""
        }`}
      >
        <button
          onClick={() => handleAnswer("true")}
          className={`${styles.optionBtn} ${
            state === "correct" && selected === "true" ? styles.glow : ""
          }`}
        >
          <img src={getImage("true")} className={styles.btnImg} alt="True" />
        </button>

        <button
          onClick={() => handleAnswer("ng")}
          className={`${styles.optionBtn} ${
            state === "correct" && selected === "ng" ? styles.glow : ""
          }`}
        >
          <img src={getImage("ng")} className={styles.btnImg} alt="Not Given" />
        </button>

        <button
          onClick={() => handleAnswer("false")}
          className={`${styles.optionBtn} ${
            state === "correct" && selected === "false" ? styles.glow : ""
          }`}
        >
          <img src={getImage("false")} className={styles.btnImg} alt="False" />
        </button>
      </div>
    </div>
  );
};

export default TrueOrFalseQuestion;
