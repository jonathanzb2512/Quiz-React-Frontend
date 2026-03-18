import { useState } from "react";
import type { TrueOrFalseAnswer } from "../interfaces/true-or-false-answer.type";

export const useTrueOrFalse = (
  correctAnswer: TrueOrFalseAnswer,
  onAnswer?: (val: TrueOrFalseAnswer) => void,
) => {
  const [state, setState] = useState<"idle" | "correct" | "wrong" | "reset">(
    "idle",
  );
  const [selected, setSelected] = useState<TrueOrFalseAnswer | null>(null);

  const handleAnswer = (value: TrueOrFalseAnswer) => {
    if (state !== "idle") return;
    setSelected(value);

    if (value === correctAnswer) {
      setState("correct");
    } else {
      setState("wrong");
    }

    if (onAnswer) onAnswer(value);

    // Lógica de tiempos
    setTimeout(() => setState("reset"), 1200);
    setTimeout(() => {
      setState("idle");
      setSelected(null);
    }, 2000);
  };

  return {
    state,
    selected,
    handleAnswer,
  };
};
