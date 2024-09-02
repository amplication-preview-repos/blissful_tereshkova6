import { Module } from "@nestjs/common";
import { ProcurementService } from "./procurement.service";
import { ProcurementController } from "./procurement.controller";
import { ProcurementResolver } from "./procurement.resolver";

@Module({
  controllers: [ProcurementController],
  providers: [ProcurementService, ProcurementResolver],
  exports: [ProcurementService],
})
export class ProcurementModule {}
