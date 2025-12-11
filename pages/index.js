export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>LiveDeck MVP</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>Transmision en vivo profesional con captura de audio y presentacion en tiempo real</p>
      <button style={{ padding: '12px 30px', fontSize: '18px', backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Iniciar Transmision</button>
    </div>
  );
}
