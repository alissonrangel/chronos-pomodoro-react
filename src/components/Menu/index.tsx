import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
//import { useState } from "react";

//type AvaiableThemes = "dark" | "light";

export function Menu() {
  //const [theme, setTheme] = useState<AvaiableThemes>("dark");

  //lida com a mudança do tema
  function handleThemeChange(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    const html = document.querySelector("html");
    if (!html) return;

    const nome = html.getAttribute("data-theme"); // forma 1

    if (nome == "dark") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  }
  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.menu}>
        <a
          href=""
          className={styles.menuLink}
          aria-label="Ir para a Home"
          title="Ir para a Home"
        >
          <HouseIcon />
        </a>
        <a
          href=""
          className={styles.menuLink}
          aria-label="Ir para a Home"
          title="Ir para a Home"
        >
          <HistoryIcon />
        </a>
        <a
          href=""
          className={styles.menuLink}
          aria-label="Configurações"
          title="Configurações"
        >
          <SettingsIcon />
        </a>
        <a
          href="#"
          // className={styles.menuLink}
          aria-label="Mudar Tema"
          title="Mudar Tema"
        >
          <button
            className={styles.menuLink}
            onClick={e => handleThemeChange(e)}
          >
            <SunIcon />
          </button>
        </a>
      </div>
    </>
  );
}
