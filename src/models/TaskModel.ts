import type { TaskStateModel } from "./TaskStateModel";

//type , interface or class, opto por type pois não tem lógica
export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; //Date.now()
  completeDate: number | null; // quando o timer chega ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel["config"];
};
