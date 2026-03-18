export interface levelTheme {
  gradient?: string;
  bg?: string;
  accent: string;
  card: string;
  button: string;
}

export const LEVEL_THEMES: Record<number, levelTheme> = {
  1: {
    gradient: "linear-gradient(180deg, #016251 0%, #3a7f6f 30%, #8fd2c5 100%)",
    accent: "#016251",
    button: "bg-[#016251] hover:bg-[#014d3f]", // Agregado para cumplir la interfaz
    card: "border-[#3a7f6f]",
  }, // JavaScript
  2: {
    gradient: "linear-gradient(180deg, #1e3a8a 0%, #3b82f6 30%, #93c5fd 100%)",
    accent: "#1e3a8a",
    button: "bg-[#1e3a8a] hover:bg-[#172e6d]", // Agregado para cumplir la interfaz
    card: "border-[#3b82f6]",
  }, // Node.js
  3: {
    bg: "bg-blue-50",
    accent: "text-blue-600",
    card: "border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
  }, // React
};
