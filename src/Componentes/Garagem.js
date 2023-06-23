import Carro from "./Carro";

function Garagem({ nome, sobrenome, apresentaGaragem, dadosCarro2, dadosCarro3, dadosCarro4, dadosCarro5 }) {
  // const { nome, sobrenome, apresentaGaragem } = props

  return (
    <div>
      <h1>Garagem de {nome + sobrenome}</h1>
      <Carro dadosCarro={dadosCarro2} />
      <Carro dadosCarro={dadosCarro3} />
      <Carro dadosCarro={dadosCarro4} />
      <Carro dadosCarro={dadosCarro5} />
    

      <button
        onClick={() => {
          apresentaGaragem(nome);
        }}
      >
        Botao
      </button>
    </div>
  );
}

export default Garagem;
