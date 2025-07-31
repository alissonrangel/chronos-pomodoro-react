import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type MainFormProps = {} & HomeProps;

export function MainForm(props: MainFormProps) {
  console.log("MainForm", props);

  const { setState } = useTaskContext();

  // function handleClick() { //com prop drilling
  //   props.setState(prevState => {
  //     return {
  //       ...prevState,
  //       config: {
  //         ...prevState.config,
  //         workTime: 34,
  //       },
  //       formattedSecondsRemaining: "22:35",
  //     };
  //   });
  // }

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "22:21",
      };
    });
  }

  return (
    <>
      <form className="form" action="">
        <div>
          <button type="button" onClick={handleClick}>
            Clicar
          </button>
        </div>
        <DefaultInput
          id="task"
          name="task"
          type="text"
          title="título"
          labelText="task"
          placeholder="Digite algo"
          // disabled
          // defaultValue="Valor Preenchido"
        ></DefaultInput>
        <div className="formRow">
          <p>Próximo intervalo é de {props.state.config.workTime} min</p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} color="green" />
        </div>
        <div className="formRow">
          <DefaultButton icon={<StopCircleIcon />} color="red" />
        </div>
      </form>
    </>
  );
}
