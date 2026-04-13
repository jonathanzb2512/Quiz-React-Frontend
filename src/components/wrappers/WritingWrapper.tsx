import React from 'react'

export const WritingWrapper = () => {
  return (
    <div style={{ padding: '10px 0'}}>
        <p style={{ color: 'cyan' }}>[Componente de Escritura]</p>
        <textarea 
          placeholder="Escribe tu respuesta técnica aquí..."
          rows={4}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: 'white',
            border: '1 px solid #444'
          }}
        />
    </div>
  )
}
