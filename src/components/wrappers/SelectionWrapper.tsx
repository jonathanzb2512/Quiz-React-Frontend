import type { Activity } from "../../interfaces/exercises";

// Definimos qué espera recibir este componente
interface Props {
  data: Activity['activity_data'];
}

export const SelectionWrapper = ({ data }: Props) => {
  return (
    <div>
      <p style={{ color: 'yellow' }}>[Componente de selección]</p>
      <ul>
        {data?.options?.map((opt: { text: string }, i: number) => (
          <li key={i} style={{ margin: '5px 0' }}>
            <button style={{ padding: '8px 12px', cursor: 'pointer' }}>
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};