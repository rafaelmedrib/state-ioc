import { container } from "tsyringe";
import ExampleService from "./service/ExampleService";

const service = container.resolve(ExampleService);

service.execute();