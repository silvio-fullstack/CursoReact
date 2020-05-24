import React from "react";
 
import Cabecalho from './componentes/Cabecalho'
import Site from './Site'
import Rodape from './componentes/Rodape'

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Site /> 
      <Rodape />
    </div>
  );
}

export default App;
