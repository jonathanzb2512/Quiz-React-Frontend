import { useExerciseStore } from "./modules/exercises/stores/useExerciseStore";
// 1. Importamos el selector de actividades
import { ActivityPicker } from "./components/wrappers/ActivityPicker";

function App() {
  // Traemos las funciones del Store
  const { next, getCurrent } = useExerciseStore();

  // Obtenemos los datos de la actividad actual
  const actual = getCurrent();

  return (
    <>
      <div style={{ 
        padding: '40px', 
        fontFamily: 'sans-serif', 
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a', // Le puse un fondo oscuro para que resalten los textos
        minHeight: '100vh',
        color: 'white'
      }}>

        <h1 style={{ color: '#6A3F9F' }}>Probando la Lógica del Quiz</h1>
        <hr style={{ borderColor: '#333' }} />

        <div style={{ marginTop: '20px', border: '1px solid #444', padding: '20px', borderRadius: '8px', backgroundColor: '#222' }}>
          <p style={{ fontSize: '12px', color: '#888' }}><strong>ID:</strong> {actual.id}</p>
          <p style={{ fontSize: '12px', color: '#888' }}><strong>Tipo:</strong> {actual.type}</p>
          
          <h2 style={{ fontSize: '24px', marginBottom: '15px', color: 'white' }}>
            {actual.statement}
          </h2>

          {/* 2. AQUÍ CONECTAMOS LA LÓGICA CON LO VISUAL */}
          {/* Este div es el contenedor de la "interacción" (botones o texto) */}
          <div style={{ 
            marginTop: '20px', 
            padding: '20px', 
            backgroundColor: '#333', 
            borderRadius: '10px',
            border: '1px dashed #6A3F9F' 
          }}>
             <ActivityPicker activity={actual} />
          </div>

          {actual.description && (
            <p style={{ fontStyle: 'italic', color: '#aaa', backgroundColor: '#111', padding: '10px', marginTop: '20px', borderRadius: '4px' }}>
              Nota: {actual.description}
            </p>
          )}
        </div>

        <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
          <button 
            onClick={next}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6A3F9F',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%'
            }}
          >
            Siguiente ejercicio →
          </button>
        </div>

        <p style={{ marginTop: '20px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
          * Al pulsar "Siguiente", el ActivityPicker detecta el 'type' del JSON y cambia el componente.
        </p>
      </div>
    </>
  );
}

export default App;