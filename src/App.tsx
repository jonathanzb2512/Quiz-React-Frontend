import TrueOrFalse from "./components/true-or-false/TrueOrFalse";
import TrueOrFalseQuestion from "./components/true-or-false/TrueOrFalseQuestion";
import quizData from "../src/mocks/quizData.json";
import { LEVEL_THEMES } from "./constants/themes";
import InstructionCard from "./components/common/InstructionCard";

function App() {
  const currentLevel = 1;
  const theme = LEVEL_THEMES[currentLevel];
  const nivel1 = quizData.levels.find((l) => l.level === currentLevel);
  const ejerciciosJS = nivel1?.exercises.find((ex) => ex.type === "true_false");

  const handleAnswer = (val: string) => {
    console.log("Respuesta:", val);
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{ background: theme.gradient }}
    >
      <TrueOrFalse
        title={nivel1?.topic || "JavaScript"}
        description={
          <InstructionCard
            text="Lee la afirmación y selecciona si es verdadera o falsa"
            accentColor={theme.accent}
          />
        }
      >
        <TrueOrFalseQuestion
          questionText={ejerciciosJS?.question || ""}
          onAnswer={handleAnswer}
        />
      </TrueOrFalse>
    </div>
  );
}

export default App;
