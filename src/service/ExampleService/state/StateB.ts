import { registry } from "tsyringe";
import { IExampleService } from "../../../types/service";

@registry([{
  token: "StateB",
  useClass: StateB
}])
export class StateB implements IExampleService.State {
  public execute(): void {
    console.log("Executing using StateB...");
  }
}