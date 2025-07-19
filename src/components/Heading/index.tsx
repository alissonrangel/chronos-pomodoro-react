import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
  attr: number;
  attr2: string;
};

export function Heading({ children, attr, attr2 }: HeadingProps) {
  console.log(attr);

  //const { children, attr, attr2 } = props;

  const classes = `${styles.heading} ${styles.cyano}`;

  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <h1 className={classes}>{children}</h1>
    </>
  );
}
