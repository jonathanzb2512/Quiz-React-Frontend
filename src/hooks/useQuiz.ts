import { useState } from "react";
import quizData from "../mocks/quizData.json";
import type { Exercise } from "../type/quiz";

export function useQuiz(currentLevel: number) {
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const nivel = quizData.levels.find((l) => l.level === currentLevel);

  const currentExercise = nivel?.exercises[exerciseIndex] as
    | Exercise
    | undefined;

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

  return {
    exerciseIndex,
    nivel,
    currentExercise,
    handleNext,
    handleBack,
  };
}
