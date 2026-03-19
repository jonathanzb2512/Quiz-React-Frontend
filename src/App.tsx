import { useState } from "react";
import { EXERCISE_COMPONENTS } from "../src/components/config/exercise-registry";
import quizData from "../src/mocks/quizData.json";
import { LEVEL_THEMES } from "./constants/themes";
import InstructionCard from "./components/common/InstructionCard";
import QuizLayout from "./components/layout/QuizLayout";

// IMPORTACIÓN DE TUS CSS MODULES
import appStyles from "../src/styles/app.module.css";
import navStyles from "../src/styles/navigation-controls.module.css";

// --- INTERFACES INTEGRADAS (Para evitar el error de importación) ---
export type ExerciseType =
  | "multiple_choice"
  | "true_false"
  | "writing"
  | "audio"
  | "drag_drop";

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  instruction?: string;
  // ... puedes añadir los demás campos si los usas aquí
}

export interface QuizData {
  testTitle: string;
  levels: {
    level: number;
    topic: string;
    exercises: Exercise[];
  }[];
}

function App() {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const currentLevel = 1;
  const theme = LEVEL_THEMES[currentLevel];

  // Forzamos el tipado de los datos del JSON
  const data = quizData as unknown as QuizData;
  const nivel = data.levels.find((l) => l.level === currentLevel);
  const currentExercise = nivel?.exercises[exerciseIndex];

  // Buscamos el componente. Si no existe (como writing o audio), será undefined.
  const ExerciseTag =
    currentExercise && currentExercise.type in EXERCISE_COMPONENTS
      ? (EXERCISE_COMPONENTS[
          currentExercise.type as keyof typeof EXERCISE_COMPONENTS
        ] as React.ElementType)
      : null;

  const totalExercises = nivel?.exercises.length ?? 0;
  const isFirst = exerciseIndex === 0;
  const isLast = exerciseIndex === totalExercises - 1;

  const handleNext = () => {
    if (nivel && exerciseIndex < nivel.exercises.length - 1) {
      setExerciseIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setExerciseIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div
      className={appStyles.mainWrapper}
      style={{ background: theme.gradient }}
    >
      <div className={appStyles.contentArea}>
        <QuizLayout
          title={nivel?.topic || "JavaScript"}
          description={
            <InstructionCard
              text={
                currentExercise?.instruction || "Selecciona la opción correcta"
              }
              accentColor={theme.accent}
            />
          }
        >
          {/* LÓGICA DE RENDERIZADO SEGURO */}
          {currentExercise ? (
            ExerciseTag ? (
              <ExerciseTag
                {...currentExercise}
                questionText={currentExercise.question}
                accentColor={theme.accent}
                onAnswer={() => setTimeout(() => handleNext(), 1500)}
              />
            ) : (
              <div
                style={{ color: "white", textAlign: "center", padding: "40px" }}
              >
                <h2>Próximamente</h2>
                <p>
                  El ejercicio de tipo <b>{currentExercise.type}</b> aún está en
                  desarrollo.
                </p>
              </div>
            )
          ) : null}
        </QuizLayout>
      </div>

      <div className={navStyles.navWrapper}>
        <div className={navStyles.navContainer}>
          <button
            onClick={handleBack}
            disabled={isFirst}
            className={navStyles.navBtn}
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={isLast}
            className={navStyles.navBtn}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
