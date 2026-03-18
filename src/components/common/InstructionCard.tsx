import { type ReactNode } from "react";
import styles from "../../styles/InstructionCard.module.css";

interface InstructionCardProps {
  text: string | ReactNode;
  accentColor: string; // Aquí pasaremos el color del nivel (ej: #016251)
}

const InstructionCard = ({ text, accentColor }: InstructionCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div
        className={styles.glassCard}
        style={{ borderBottom: `6px solid ${accentColor}` }} // El color sigue siendo dinámico
      >
        <p className={styles.instructionText}>{text}</p>
      </div>
    </div>
  );
};
export default InstructionCard;
