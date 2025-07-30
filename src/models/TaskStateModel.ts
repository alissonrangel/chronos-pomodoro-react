import type { TaskModel } from "./TaskModel";

// Estado -> Componentes -> Filhos
// Estado Completo

export type TaskStateModel = {
  tasks: TaskModel[]; // no histórico, no MainForm
  secondsRemaining: number; // no CountDown, no histórico, no MainForm, no Button
  formattedSecondsRemaining: string; // no titulo, no CountDown
  activeTask: TaskModel | null; // no CountDown, no histórico, no MainForm, no Button
  currentCycle: number; // 1 a 8 // na Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
