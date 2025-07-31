import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  //const taskContext = useContext(TaskContext);
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* este valor que é passado no hook, pois este provider tá em uso */}
      {children}
    </TaskContext.Provider>
  );
}
