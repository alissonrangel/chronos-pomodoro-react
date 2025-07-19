import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

// type MenuProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

export function Menu() {
  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.menu}>
        <a href='' className={styles.menuLink}>
          <HouseIcon />
        </a>
        <a href='' className={styles.menuLink}>
          <HistoryIcon />
        </a>
        <a href='' className={styles.menuLink}>
          <SettingsIcon />
        </a>
        <a href='' className={styles.menuLink}>
          <SunIcon />
        </a>
      </div>
    </>
  );
}
