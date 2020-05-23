import React from "react";

const Rodape = (props) => {
  return (
    <footer className="container-fluid text-center">
      <a href="localhost:3000" title="To Top">
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>
        Site Criado por Silvio Alves - Alves Automação{" "}
        <a
          href="https://www.alvesautomacao.blogspot.com.br"
          title="Blog da Automação"
        >
          www.alvesautomacao.blogspot.com.br
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
