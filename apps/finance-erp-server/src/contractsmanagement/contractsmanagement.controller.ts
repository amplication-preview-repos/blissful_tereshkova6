import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ContractsManagementService } from "./contractsmanagement.service";

@swagger.ApiTags("contractsManagements")
@common.Controller("contractsManagements")
export class ContractsManagementController {
  constructor(protected readonly service: ContractsManagementService) {}
}
