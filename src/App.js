import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'

import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servico from './componentes/Servicos'
import Rodape from './componentes/Rodape'
import Portifolio from './componentes/Portifolio'
import Precos from './componentes/Precos'
import Contato from './componentes/Contato'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route path='/' exact component={Inicio}/>
        <Route path='/servicos' component={Servico}/>
        <Route path='/portifolio' component={Portifolio}/>
        <Route path='/precos' component={Precos}/>
        <Route path='/contato' component={Contato}/>
  
        <Rodape />
      </div></BrowserRouter>

  );
}

export default App;
