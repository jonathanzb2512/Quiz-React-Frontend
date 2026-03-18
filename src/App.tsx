import { useState } from "react";
import { EXERCISE_COMPONENTS } from "../src/components/config/exercise-registry";
import quizData from "../src/mocks/quizData.json";
import { LEVEL_THEMES } from "./constants/themes";
import InstructionCard from "./components/common/InstructionCard";
import QuizLayout from "./components/layout/QuizLayout";

interface Exercise {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  instruction?: string;
}

type ExerciseType = keyof typeof EXERCISE_COMPONENTS;

function App() {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const currentLevel = 1;
  const theme = LEVEL_THEMES[currentLevel];

  const nivel = quizData.levels.find((l) => l.level === currentLevel);
  const currentExercise = nivel?.exercises[exerciseIndex] as
    | Exercise
    | undefined;

  const ExerciseTag = currentExercise
    ? EXERCISE_COMPONENTS[currentExercise.type as ExerciseType]
    : null;

  // 1. Función para avanzar al siguiente ejercicio
  const handleNext = () => {
    if (nivel && exerciseIndex < nivel.exercises.length - 1) {
      setExerciseIndex((prev) => prev + 1);
    } else {
      console.log("¡Has llegado al final del nivel!");
    }
  };

  const handleBack = () => {
    setExerciseIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col items-center"
      style={{ background: theme.gradient }}
    >
      <QuizLayout
        title={nivel?.topic || "JavaScript"}
        description={
          <InstructionCard
            text={
              currentExercise?.instruction ||
              (currentExercise?.type === "true_false"
                ? "Lee la afirmación y selecciona si es verdadera o falsa"
                : "Selecciona la opción correcta")
            }
            accentColor={theme.accent}
          />
        }
      >
        {currentExercise && ExerciseTag && (
          <ExerciseTag
            {...currentExercise}
            questionText={currentExercise.question}
            accentColor={theme.accent}
            /* 2. AQUÍ ACTIVAMOS EL CAMBIO AUTOMÁTICO */
            onAnswer={(res: unknown) => {
              console.log("Respuesta capturada:", res);

              // Esperamos 1.5 segundos para que el usuario vea si acertó
              // y luego pasamos al siguiente ejercicio automáticamente
              setTimeout(() => {
                handleNext();
              }, 1500);
            }}
          />
        )}
      </QuizLayout>

      {/* Navegación manual por si quieres saltar rápido */}
      <div className="fixed bottom-10 flex gap-6">
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30 disabled:opacity-30"
          onClick={handleBack}
          disabled={exerciseIndex === 0}
        >
          ← Anterior
        </button>
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30 disabled:opacity-30"
          onClick={handleNext}
          disabled={exerciseIndex === (nivel?.exercises.length || 0) - 1}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}

export default App;
