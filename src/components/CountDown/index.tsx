import { useContext } from "react";
import type { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

import {
  TaskContext,
  TaskContext0,
} from "../../contexts/TaskContext/TaskContext";

// type LogoProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

type CountDownProps = {} & HomeProps;

export function CountDown(props: CountDownProps) {
  const taskContext0 = useContext(TaskContext0);

  const taskContext = useContext(TaskContext);

  const { state, setState } = useTaskContext(); // usando com o hook customizado, recupera o valor do contexto

  console.log("COUT0 passado pelo contexto0", taskContext0);

  console.log("COUT1 passado pelo prop drilling", props);

  console.log("COUT2 passado pelo contexto", taskContext);

  console.log("COUT3 passado pelo hook customizado", state, setState);

  return (
    <>
      {/* <h1 className={classes}>{props.children}</h1> */}
      <div className={styles.container}>
        {/* {props.state.formattedSecondsRemaining} */}
        {/* {taskContext.state.formattedSecondsRemaining} */}
        {state.formattedSecondsRemaining}
      </div>
    </>
  );
}
