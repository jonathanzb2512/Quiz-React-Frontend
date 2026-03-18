import { type ReactNode } from "react";
import styles from "../../styles/true-or-false.module.css";

interface TrueOrFalseProps {
  children?: ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
}

const TrueOrFalse: React.FC<TrueOrFalseProps> = ({
  children,
  title,
  description,
}) => {
  return (
    // Agregamos el parentContainer aquí
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

export default TrueOrFalse;
