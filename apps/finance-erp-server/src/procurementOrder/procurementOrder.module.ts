import { Module } from "@nestjs/common";
import { ProcurementOrderModuleBase } from "./base/procurementOrder.module.base";
import { ProcurementOrderService } from "./procurementOrder.service";
import { ProcurementOrderController } from "./procurementOrder.controller";
import { ProcurementOrderResolver } from "./procurementOrder.resolver";

@Module({
  imports: [ProcurementOrderModuleBase],
  controllers: [ProcurementOrderController],
  providers: [ProcurementOrderService, ProcurementOrderResolver],
  exports: [ProcurementOrderService],
})
export class ProcurementOrderModule {}
