import { registry } from "tsyringe";
import { IExampleService } from "../../../types/service";

@registry([{
  token: "StateA",
  useClass: StateA
}])
export class StateA implements IExampleService.State {
  public execute(): void {
    console.log("Executing using StateA...");
  }
}