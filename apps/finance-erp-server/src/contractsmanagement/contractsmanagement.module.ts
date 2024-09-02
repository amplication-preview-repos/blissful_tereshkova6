import { Module } from "@nestjs/common";
import { ContractsManagementService } from "./contractsmanagement.service";
import { ContractsManagementController } from "./contractsmanagement.controller";
import { ContractsManagementResolver } from "./contractsmanagement.resolver";

@Module({
  controllers: [ContractsManagementController],
  providers: [ContractsManagementService, ContractsManagementResolver],
  exports: [ContractsManagementService],
})
export class ContractsManagementModule {}
