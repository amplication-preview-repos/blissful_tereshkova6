import * as graphql from "@nestjs/graphql";
import { BudgetManagementService } from "./budgetmanagement.service";

export class BudgetManagementResolver {
  constructor(protected readonly service: BudgetManagementService) {}
}
