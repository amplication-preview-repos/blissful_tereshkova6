import * as graphql from "@nestjs/graphql";
import { ContractsManagementService } from "./contractsmanagement.service";

export class ContractsManagementResolver {
  constructor(protected readonly service: ContractsManagementService) {}
}
