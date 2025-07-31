import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "13:31",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    longBreakTime: 15,
    shortBreakTime: 5,
  },
};
