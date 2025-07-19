import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

// type LogoProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

export function Logo() {
  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.logo}>
        <a href='' className={styles.logoLink}>
          <TimerIcon />
          <span>Chronos</span>
        </a>
      </div>
    </>
  );
}
