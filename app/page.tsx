export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '50px', fontSize: '48px' }}>
        LiveDeck MVP
      </h1>
      <p style={{ color: '#888', textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
        Transmision en vivo profesional
      </p>
      <div style={{ maxWidth: '800px', margin: '50px auto', backgroundColor: '#1a1a1a', padding: '40px', borderRadius: '10px', color: '#fff' }}>
        <h2>Bienvenido a LiveDeck</h2>
        <p>Esta es tu aplicacion de transmision en vivo con captura de audio y presentacion en tiempo real.</p>
        <button style={{ backgroundColor: '#7c3aed', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          Iniciar Transmision
        </button>
      </div>
    </div>
  );
}
