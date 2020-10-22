import React, { useState } from 'react';

function Home() {
  const [title] = useState('Bem vindo a Rede de Benefícios');

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Home;