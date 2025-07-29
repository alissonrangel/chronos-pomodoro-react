import type { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";

// type LogoProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

type CountDownProps = {} & HomeProps;

export function CountDown(props: CountDownProps) {
  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.container}>
        {props.state.formattedSecondsRemaining}
      </div>
    </>
  );
}
