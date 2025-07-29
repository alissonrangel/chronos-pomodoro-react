import { MainTemplate } from "../../templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";
import type { TaskStateModel } from "../../models/TaskStateModel";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, setState } = props;

  // console.log(props);

  // function handleClick() {
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       currentCycle: 5,
  //     };
  //   });
  // }

  return (
    <MainTemplate>
      {/* <Container>
        <button onClick={handleClick}>clicar</button>
      </Container> */}
      <Container>
        <CountDown state={state} setState={setState} />
      </Container>
      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
