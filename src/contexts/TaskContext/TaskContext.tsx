import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

// este valor só será utilizado se não utilizar o Provider
export const TaskContext0 = createContext({
  chave: "valor",
});

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext2 =
  createContext<TaskContextProps>(initialContextValue);

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
