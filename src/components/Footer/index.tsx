import styles from "./styles.module.css";

type FooterProps = {} & React.ComponentProps<"a">;

export function Footer({ href }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <a href={href}>Entenda Como Funciona a Técnica Pomodoro</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
