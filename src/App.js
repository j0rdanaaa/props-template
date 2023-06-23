import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = 'Jordana'
  const sobrenome = ' Góes'

  const apresentaGaragem = (nome) => {
alert('Boas vindas a garagem de ' + nome)
//alert(`Boas vindas a garagem de ${nome}`)
  }

  const nome2 = 'Jordana'

  /*const dadosCarro = {
    nome: 'Fusca',
    ano: 1979,
    cor: 'Amarelo',
    flex: false
  }*/

    const dadosCarro2 = {
    nome: 'Fusca',
    ano: 1979,
    cor: 'Vermelho',
    flex: false
    }
    const dadosCarro3 = {
    nome: 'Fusca',
    ano: 1972,
    cor: 'Preto',
    flex: false
    }
    const dadosCarro4 = {
    nome: 'Fusca',
    ano: 1970,
    cor: 'Azul',
    flex: false
    }
    const dadosCarro5 = {
    nome: 'Fusca',
    ano: 1977,
    cor: 'Branco',
    flex: false
    }
    
  return (
      <div className="App">
        {/* <Garagem
        nome={nome}
        sobrenome={sobrenome}
        apresentaGaragem={apresentaGaragem}
        dadosCarro={dadosCarro}
      /> */}
       <Garagem nome={nome2}
       apresentaGaragem={apresentaGaragem}
       dadosCarro2={dadosCarro2}
       dadosCarro3={dadosCarro3}
       dadosCarro4={dadosCarro4}
       dadosCarro5={dadosCarro5}
       />
    </div>
  );
 }
