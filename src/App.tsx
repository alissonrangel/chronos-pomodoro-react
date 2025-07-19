/**
 * Componente do React com PascalCase
 * Ex.:ExemploDeComponente
 */
import { Fragment } from 'react/jsx-runtime';
import { Camera } from 'lucide-react';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    // usa parênteses quando tem mais de uma linha
    // return é o que vai ser exibido na página
    <Fragment>
      {/* React Fragment, elemento Pai */}
      {/* <div className='container'>
        <div className='content'>
          <section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            consequuntur tempore architecto molestias quasi quam? Neque unde
            perspiciatis modi deleniti laboriosam, animi omnis, dolorem minima
            ut nulla deserunt asperiores pariatur.
          </section>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              consequuntur tempore architecto molestias quasi quam? Neque unde
              perspiciatis modi deleniti laboriosam, animi omnis, dolorem minima
              ut nulla deserunt asperiores pariatur.
            </section>
          </div>
        </div>
      </div> */}
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
          <DefaultInput id="task" name="task" type="text">
            Input
          </DefaultInput>
          <div className="formRow">
            <p>Lorem, ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
      <Heading attr={123} attr2="String">
        Olá Children
        <button>
          <Camera color="green" size={48} />
        </button>
      </Heading>
      <h1>Olá App 2!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum
        nihil soluta, illum cum, maiores dolor facilis quas, sequi modi suscipit
        illo ex a nobis libero velit nulla ullam molestias. Possimus facilis
        dicta
      </p>
      {/* <ChronosHome /> */}
    </Fragment>
  );
}
//export default App;
//export { App };
