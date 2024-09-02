import { Module } from "@nestjs/common";
import { TreasuryService } from "./treasury.service";
import { TreasuryController } from "./treasury.controller";
import { TreasuryResolver } from "./treasury.resolver";

@Module({
  controllers: [TreasuryController],
  providers: [TreasuryService, TreasuryResolver],
  exports: [TreasuryService],
})
export class TreasuryModule {}
