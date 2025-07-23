import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvaiableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaiableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaiableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  //lida com a mudança do tema
  function handleThemeChange(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault(); // não segue o link

    // const html = document.documentElement;
    // if (!html) return;
    // if (theme == "dark") {
    //   html.setAttribute("data-theme", "light");
    //   setTheme("light");
    // } else {
    //   html.setAttribute("data-theme", "dark");
    //   setTheme("dark");
    // }

    setTheme(prevState => {
      const nextTheme = prevState === "dark" ? "light" : "dark";
      return nextTheme;
    });

    //document.documentElement.setAttribute("data-theme", theme);
  }

  // executado toda vez que o comp. renderiza na tela
  useEffect(() => {
    console.log("useEffect sem dependência", Date.now());
  });

  // executado apenas quando o React monta o comp na tela pela primeira vez
  useEffect(() => {
    console.log("useEffect com array de dependência vazio", Date.now());
  }, []);

  // executado apenas quando o valor da depend. mudar
  useEffect(() => {
    console.log("useEffect com array de dep com theme", Date.now());
    // aqui eu já tenho o valor do theme atualizado
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
    //função de clean up
    return () => {
      console.log("Olha, estacomponente será atualizado");
    };
  }, [theme]);

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
          aria-label="Ver Histórico"
          title="Ver Histórico"
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
            {nextThemeIcon[theme]}
          </button>
        </a>
      </div>
    </>
  );
}
