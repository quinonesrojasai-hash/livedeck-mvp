'use client';

import { useState } from 'react';

export default function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [slides, setSlides] = useState([{ id: 1, title: 'Slide 1', content: 'Bienvenido a LiveDeck' }]);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="border-b border-purple-500/30 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              LiveDeck MVP
            </h1>
            <p className="text-gray-400 text-sm mt-1">Transmision en vivo profesional</p>
          </div>
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              isRecording
                ? 'bg-red-500/80 hover:bg-red-600 text-white'
                : 'bg-purple-500/80 hover:bg-purple-600 text-white'
            }`}
          >
            {isRecording ? 'Grabando' : 'Iniciar'}
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6 h-96">
          <div className="col-span-2">
            <div className="aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center border-2 border-purple-500/30">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {slides[currentSlideIdx]?.title}
                </h2>
                <p className="text-xl text-gray-300">
                  {slides[currentSlideIdx]?.content}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4 backdrop-blur">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Transcripcion</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Microfono: {isRecording ? 'Activo' : 'Inactivo'}</p>
              <p>Estado: {isRecording ? 'EN VIVO' : 'LISTO'}</p>
              <p>Diapositiva: {currentSlideIdx + 1} / {slides.length}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => setCurrentSlideIdx(Math.max(0, currentSlideIdx - 1))}
            className="px-4 py-2 bg-purple-500/50 hover:bg-purple-600/50 text-white rounded transition"
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentSlideIdx(Math.min(slides.length - 1, currentSlideIdx + 1))}
            className="px-4 py-2 bg-purple-500/50 hover:bg-purple-600/50 text-white rounded transition"
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
}
