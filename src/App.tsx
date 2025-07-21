/**
 * Componente do React com PascalCase
 * Ex.:ExemploDeComponente
 */
import { Fragment } from "react/jsx-runtime";
import { Camera, PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { Footer } from "./components/Footer";
import { useState } from "react";

export function App() {
  /**
   * Eu quero que todos o comps que usarem numero saibam as mudanças em seu valor
   */
  //let numero = 0;
  // sempre que usar useState, não vou usar atribuição diretamente
  // o React passa a monitorar a variável

  //const [numero, setNumero] = useState(0);
  const [numero, setNumero] = useState(() => {
    // se for pesado de inicializar
    console.log("lazy inicialization");
    return 0;
  });

  //functions com on ele chama de handle
  function handleClick() {
    // const span = document.getElementById("numero");
    // if (!span) {
    //   return;
    // }
    // numero += 1; // no console muda, mas
    // span.innerText = "Número " + numero.toString();
    // console.log(numero, Date.now());

    //setNumero(numero + 1); espera renderizar para alterar o valor, se for usado várias vezes só vai funcionar a primeira vez

    //sempre que eu depender do valor anterior da variável, eu posso usar prevState no setNumero
    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1);
    // soma de 3 em 3
  }

  return (
    // usa parênteses quando tem mais de uma linha
    // return é o que vai ser exibido na página
    <Fragment>
      <Heading attr={numero} attr2="numero">
        <span id="numero">Número: {numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <DefaultInput
            id="task"
            name="task"
            type="text"
            title="título"
            labelText="task"
            placeholder="Digite algo"
            // disabled
            // defaultValue="Valor Preenchido"
          ></DefaultInput>
          <div className="formRow">
            <p>Lorem, ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
          <div className="formRow">
            <DefaultButton icon={<StopCircleIcon />} color="red" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer href="www.google.com" />
      </Container>
    </Fragment>
  );
}
//export default App;
//export { App };
