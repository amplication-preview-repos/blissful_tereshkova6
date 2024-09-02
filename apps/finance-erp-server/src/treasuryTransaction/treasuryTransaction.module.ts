import { Module } from "@nestjs/common";
import { TreasuryTransactionModuleBase } from "./base/treasuryTransaction.module.base";
import { TreasuryTransactionService } from "./treasuryTransaction.service";
import { TreasuryTransactionController } from "./treasuryTransaction.controller";
import { TreasuryTransactionResolver } from "./treasuryTransaction.resolver";

@Module({
  imports: [TreasuryTransactionModuleBase],
  controllers: [TreasuryTransactionController],
  providers: [TreasuryTransactionService, TreasuryTransactionResolver],
  exports: [TreasuryTransactionService],
})
export class TreasuryTransactionModule {}
