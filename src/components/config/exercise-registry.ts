import TrueOrFalseQuestion from "../../components/true-or-false/TrueOrFalseQuestion";
import MultipleChoice from "../../components/multiple-choice/MultipleChoice";

// Este es el "Mapa" que le dirá a App.tsx qué renderizar
export const EXERCISE_COMPONENTS = {
  true_false: TrueOrFalseQuestion,
  multiple_choice: MultipleChoice,
  // Aquí irás registrando los nuevos:
  // writing: WritingExercise,
} as const;

// Esto te servirá para que TypeScript no te de errores en el App.tsx
export type ExerciseType = keyof typeof EXERCISE_COMPONENTS;
