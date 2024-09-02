import { Module } from "@nestjs/common";
import { FinancialAccountModuleBase } from "./base/financialAccount.module.base";
import { FinancialAccountService } from "./financialAccount.service";
import { FinancialAccountController } from "./financialAccount.controller";
import { FinancialAccountResolver } from "./financialAccount.resolver";

@Module({
  imports: [FinancialAccountModuleBase],
  controllers: [FinancialAccountController],
  providers: [FinancialAccountService, FinancialAccountResolver],
  exports: [FinancialAccountService],
})
export class FinancialAccountModule {}
