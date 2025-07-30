import { useContext } from "react";
import type { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";
import { TaskContext, useTaskContext } from "../../contexts/TaskContext";

// type LogoProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

type CountDownProps = {} & HomeProps;

export function CountDown(props: CountDownProps) {
  const taskContext = useContext(TaskContext);

  const taskContext2 = useTaskContext(); // usando com o hook customizado, recupera o valor do contexto

  console.log("COUT1 passado pelo prop drilling", props);

  console.log("COUT2 passado pelo contexto", taskContext);

  console.log("COUT3 passado pelo hook customizado", taskContext2);

  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.container}>
        {/* {props.state.formattedSecondsRemaining} */}
        {taskContext.state.formattedSecondsRemaining}
      </div>
    </>
  );
}
