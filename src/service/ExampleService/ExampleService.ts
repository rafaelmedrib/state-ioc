import { container, inject, injectable } from "tsyringe";
import { IExampleService } from "../../types/service";
import { getContainerConfig } from "../../util/getContainerConfig";
import './state'

const SERVICE = "ExampleService";

container.register(SERVICE, {
  useFactory: (container) => {
    const config = getContainerConfig(SERVICE)
    return container.resolve(config)
  }
})

@injectable()
export class ExampleService implements IExampleService.Context {
  constructor(
    @inject(SERVICE)
    private state: IExampleService.State
    ) {}

  public execute(): void {
    this.state.execute();
  }
}