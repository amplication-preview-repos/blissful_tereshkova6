import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BudgetManagementService } from "./budgetmanagement.service";

@swagger.ApiTags("budgetManagements")
@common.Controller("budgetManagements")
export class BudgetManagementController {
  constructor(protected readonly service: BudgetManagementService) {}
}
