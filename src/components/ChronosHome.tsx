import React from 'react';
import { Play } from 'lucide-react';

export default function ChronosHome() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#0d101e] to-[#141e31] flex flex-col items-center justify-center text-white px-4'>
      {/* Logo e Título */}
      <div className='flex flex-col items-center gap-2 mb-6'>
        <div className='text-green-500 text-5xl'>⏱️</div>
        <h1 className='text-green-500 text-3xl font-bold'>Chronos</h1>
      </div>

      {/* Botões de Ação */}
      <div className='flex gap-4 mb-6'>
        {['🏠', '⏳', '⚙️', '☀️'].map((icon, index) => (
          <button
            key={index}
            className='bg-green-600 hover:bg-green-700 transition-colors w-12 h-12 rounded-md flex items-center justify-center text-2xl'
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Timer */}
      <div className='text-7xl font-bold mb-4'>00:00</div>

      {/* Tarefa */}
      <div className='text-center mb-2'>
        <p className='text-gray-400 text-sm'>task:</p>
        <p className='text-xl border-b border-green-600 inline-block px-4'>
          Estudar
        </p>
      </div>

      {/* Mensagem de foco */}
      <p className='mb-6 text-sm'>
        Nesse ciclo <span className='font-bold'>foque por 25 min.</span>
      </p>

      {/* Ciclos */}
      <div className='flex gap-2 mb-6'>
        {[
          'yellow-400',
          'green-400',
          'blue-400',
          'teal-400',
          'yellow-400',
          'green-400',
          'blue-400',
          'teal-400',
        ].map((color, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full bg-${color}`}
          ></span>
        ))}
      </div>

      {/* Botão Iniciar */}
      <button className='bg-green-600 hover:bg-green-700 transition-colors w-16 h-16 rounded-md flex items-center justify-center'>
        <Play className='text-white w-6 h-6' />
      </button>

      {/* Rodapé */}
      <footer className='mt-10 text-xs text-gray-400 text-center'>
        <p>
          <a href='#' className='underline hover:text-red-400'>
            Entenda a técnica pomodoro 🍅
          </a>
        </p>
        <p className='mt-2'>
          Chronos Pomodoro © 2025 - Feito com{' '}
          <span className='text-green-500'>💚</span>
        </p>
      </footer>
    </main>
  );
}
