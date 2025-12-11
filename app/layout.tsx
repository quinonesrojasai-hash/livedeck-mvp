import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LiveDeck MVP',
  description: 'Aplicación de transmisión en vivo con captura de audio y presentación en tiempo real',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
