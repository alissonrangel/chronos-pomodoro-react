import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

// type MainFormProps = {
//   children: React.ReactNode;
//   attr: number;
//   attr2: string;
// };

export function MainForm() {
  return (
    <>
      <form className="form" action="">
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
          <p>Lorem, ipsum dolor sit amet.</p>
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
