"use client"
import React, { useEffect, useState } from 'react';

const Relogio: React.FC = () => {
  const [dataHora, setDataHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDataHora(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup do intervalo
  }, []);

  const formatarDataHora = (data: Date) => {
    const dia = data.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const hora = data.toLocaleTimeString('pt-BR');

    return `${dia}, ${hora}`;
  };

  return (
    <div className='flex items-center justify-center'>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '10px' }}>
        <h2 className='text-4xl'>Relógio</h2>
        <p className='text-3xl'>{formatarDataHora(dataHora)}</p>
      </div>
    </div>
  );
};

export default Relogio;
