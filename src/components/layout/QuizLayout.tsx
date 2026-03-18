import { type ReactNode } from "react";
import styles from "../../styles/quiz-layout.module.css";

interface QuizLayoutProps {
  children: ReactNode;
  title: string;
  description: ReactNode; // Aquí pasamos el InstructionCard
}

const QuizLayout = ({ children, title, description }: QuizLayoutProps) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.gameContent}>
        <header className={styles.headerSection}>
          <h1 className={styles.innerTitle}>{title}</h1>
          {description}
        </header>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
};

export default QuizLayout;
