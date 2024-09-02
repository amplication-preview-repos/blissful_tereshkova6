import { Module } from "@nestjs/common";
import { BudgetManagementService } from "./budgetmanagement.service";
import { BudgetManagementController } from "./budgetmanagement.controller";
import { BudgetManagementResolver } from "./budgetmanagement.resolver";

@Module({
  controllers: [BudgetManagementController],
  providers: [BudgetManagementService, BudgetManagementResolver],
  exports: [BudgetManagementService],
})
export class BudgetManagementModule {}
