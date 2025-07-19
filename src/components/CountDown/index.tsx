import styles from './styles.module.css';

// type LogoProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

export function CountDown() {
  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.container}>00:00</div>
    </>
  );
}
