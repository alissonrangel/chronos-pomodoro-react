import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App'; //import de um default pode ter qualquer nome

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Para garantir que seu projeto continuará funcionando se rodar mais de uma vez. É em modo de desenvolvimento */}
    {/* <h1>Olá mundo!!!</h1> */}
    <App />
  </StrictMode>,
);
