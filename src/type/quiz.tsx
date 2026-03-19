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
  sentence?: string;
  correctAnswer?: string | boolean | string[];
  instruction?: string;
  constraints?: {
    minWords?: number;
    maxWords?: number;
  };
  userResponse?: unknown;
}

export interface Level {
  level: number;
  topic: string;
  locked: boolean;
  exercises: Exercise[];
}

export interface QuizData {
  testTitle: string;
  levels: Level[];
}
