import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    // usa parênteses quando tem mais de uma linha
    // return é o que vai ser exibido na página
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer href="www.google.com" />
      </Container>
    </>
  );
}
