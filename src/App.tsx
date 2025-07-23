/**
 * Componente do React com PascalCase
 * Ex.:ExemploDeComponente
 */
// import { Fragment } from "react/jsx-runtime";
// import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
// import { Container } from "./components/Container";
// import { Heading } from "./components/Heading";
// import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
// import { Menu } from "./components/Menu";
// import { CountDown } from "./components/CountDown";
// import { DefaultInput } from "./components/DefaultInput";
// import { Cycles } from "./components/Cycles";
// import { DefaultButton } from "./components/DefaultButton";
// import { Footer } from "./components/Footer";
// import { useState } from "react";
// import { MainForm } from "./components/MainForm";
import { Home } from "./pages/Home";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export function App() {
  /**
   * Eu quero que todos o comps que usarem numero saibam as mudanças em seu valor
   */
  //let numero = 0;
  // sempre que usar useState, não vou usar atribuição diretamente
  // o React passa a monitorar a variável

  //const [numero, setNumero] = useState(0);
  // const [numero, setNumero] = useState(() => {
  //   // se for pesado de inicializar
  //   console.log("lazy inicialization");
  //   return 0;
  // });

  //functions com on ele chama de handle
  //function handleClick() {
  // const span = document.getElementById("numero");
  // if (!span) {
  //   return;
  // }
  // numero += 1; // no console muda, mas
  // span.innerText = "Número " + numero.toString();
  // console.log(numero, Date.now());

  //setNumero(numero + 1); espera renderizar para alterar o valor, se for usado várias vezes só vai funcionar a primeira vez

  //sempre que eu depender do valor anterior da variável, eu posso usar prevState no setNumero
  //prevState => valor anterior da variável
  // setNumero(prevState => prevState + 1);
  // setNumero(prevState => prevState + 1);
  // setNumero(prevState => prevState + 1);
  // soma de 3 em 3
  //}

  // return (
  //   <Fragment>
  //     <Heading attr={numero} attr2="numero">
  //       <span id="numero">Número: {numero}</span>
  //     </Heading>
  //     <button onClick={handleClick}>Aumenta</button>
  //     <Container>
  //       <Logo />
  //     </Container>
  //     <Container>
  //       <Menu />
  //     </Container>
  //     <Container>
  //       <CountDown />
  //     </Container>
  //     <Container>
  //       <MainForm />
  //     </Container>
  //     <Container>
  //       <Footer href="www.google.com" />
  //     </Container>
  //   </Fragment>
  // );

  return <AboutPomodoro />;
}
//export default App;
//export { App };
