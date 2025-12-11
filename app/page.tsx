'use client';

import { useState } from 'react';

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
  });

  const handleStartStream = () => {
    setShowModal(true);
  };

  const requestPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setPermissions({ camera: true, microphone: true });
      setIsLive(true);
      setShowModal(false);
      // Stop the stream (we're just checking permissions for demo)
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      alert('Error al acceder a cámara/micrófono. Verifica los permisos.');
    }
  };

  const stopStream = () => {
    setIsLive(false);
    setPermissions({ camera: false, microphone: false });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Encabezado */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '50px',
          paddingBottom: '20px',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '48px',
            margin: 0,
            fontWeight: 'bold',
          }}
        >
          LiveDeck MVP
        </h1>
        <p style={{ color: '#888', textAlign: 'center', fontSize: '18px', marginTop: '10px' }}>
          Transmisión en vivo profesional
        </p>
      </div>

      {/* Contenido principal */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 150px)',
        }}
      >
        {!isLive ? (
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '600px',
              width: '90%',
            }}
          >
            <h2
              style={{
                color: '#fff',
                fontSize: '32px',
                marginTop: 0,
                marginBottom: '20px',
              }}
            >
              Bienvenido a LiveDeck
            </h2>
            <p
              style={{
                color: '#ddd',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '30px',
              }}
            >
              Esta es tu aplicación de transmisión en vivo con captura de audio y presentación en tiempo real.
            </p>
            <button
              onClick={handleStartStream}
              style={{
                backgroundColor: '#7c3aed',
                color: '#fff',
                padding: '12px 30px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              className="btn-hover"
            >
              Iniciar Transmisión
            </button>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '800px',
              width: '90%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#000',
                borderRadius: '8px',
                aspectRatio: '16/9',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '30px',
                border: '2px solid #7c3aed',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#ff0000',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    animation: 'blink 1s infinite',
                  }}
                ></span>
                EN VIVO
              </div>
              <svg
                style={{ width: '80px', height: '80px', color: '#7c3aed' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p style={{ color: '#888', marginTop: '20px' }}>En transmisión...</p>
            </div>

            <div
              style={{
                backgroundColor: '#0a0a0a',
                padding: '20px',
                borderRadius: '6px',
                marginBottom: '30px',
                textAlign: 'left',
              }}
            >
              <h3 style={{ color: '#fff', marginTop: 0 }}>Estado de la Transmisión</h3>
              <p style={{ color: '#aaa', marginBottom: '10px' }}>
                <strong>Cámara:</strong> {permissions.camera ? '✅ Activa' : '❌ Inactiva'}
              </p>
              <p style={{ color: '#aaa' }}>
                <strong>Micrófono:</strong> {permissions.microphone ? '✅ Activo' : '❌ Inactivo'}
              </p>
            </div>

            <button
              onClick={stopStream}
              style={{
                backgroundColor: '#ef4444',
                color: '#fff',
                padding: '12px 30px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              className="btn-hover-red"
            >
              Detener Transmisión
            </button>
          </div>
        )}
      </div>

      {/* Modal de Permisos */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#fff', marginTop: 0 }}>Solicitud de Permisos</h2>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              Para comenzar la transmisión en vivo, necesitamos acceso a tu cámara y micrófono.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: '#444',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                }}
                className="btn-hover-gray"
              >
                Cancelar
              </button>
              <button
                onClick={requestPermissions}
                style={{
                  backgroundColor: '#7c3aed',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                }}
                className="btn-hover"
              >
                Permitir
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .btn-hover:hover {
          background-color: #6d28d9;
        }
        .btn-hover-red:hover {
          background-color: #dc2626;
        }
        .btn-hover-gray:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
}
