
import { create } from "zustand";
import data from '../../../mocks/quizData.json';
import type { Activity } from "../../../interfaces/exercises";

interface ExerciseState {
  currentExercise: number;
  currentActivity: number;
  next: () => void;
  getCurrent: () => Activity;
}

export const useExerciseStore = create<ExerciseState>((set, get) => ({
    currentExercise: 0,
    currentActivity: 0,

    getCurrent: () => {
      const {currentExercise, currentActivity} = get();
      return data.evaluation.exercises[currentExercise].activities[currentActivity];
    },
    next: () => set((state) => {
      const exercises = data.evaluation.exercises;
      const currentActivity = exercises[state.currentExercise].activities;

      if (state.currentActivity <  currentActivity.length -1) {
        return { currentActivity: state.currentActivity + 1 }
      }
      else if ( state.currentExercise < exercises.length - 1) {
        return {
          currentExercise: state.currentExercise + 1,
          currentActivity: 0
        }
      }
      return state;
    })

}))