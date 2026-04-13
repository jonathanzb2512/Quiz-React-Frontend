import { SelectionWrapper } from "../wrappers/SelectionWrapper";
import { WritingWrapper } from "../wrappers/WritingWrapper";
import type { Activity } from "../../interfaces/exercises"

// Definimos que este componente recibe una 'activity'
interface Props {
  activity: Activity;
}

export const ActivityPicker = ({ activity }: Props) => {
  
  // Usamos un 'switch' para mirar el TYPE del JSON
  // Importante: Los nombres deben ser iguales a tu quizData.json
  switch (activity.type) {
    case "simple-selection":
    case "multiple_choice": // Por si en el JSON lo dejaste así
      return <SelectionWrapper data={activity.activity_data} />;
    
    case "writing":
      return <WritingWrapper />;
      
    case "speaking":
    case "audio":
      return <div style={{ color: '#ff9800' }}>[Próximamente: Grabador de Voz]</div>;

    case "true-or-false":
    case "true_false":
      return <div style={{ color: '#4caf50' }}>[Próximamente: True or False]</div>;

    default:
      return (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px' }}>
          Error: El tipo "{activity.type}" no tiene un componente asignado todavía.
        </div>
      );
  }
};