import React, { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "23:37",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    longBreakTime: 15,
    shortBreakTime: 5,
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// este valor só será utilizado se não utilizar o Provider
// export const TaskContext = createContext({
//   chave: "valor",
// });

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  //const taskContext = useContext(TaskContext);

  return (
    <TaskContext.Provider value={initialContextValue}>
      {/* este valor que é passado no hook, pois este provider tá em uso */}
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
