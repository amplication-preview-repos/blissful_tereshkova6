import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcurementOrderService } from "./procurementOrder.service";
import { ProcurementOrderControllerBase } from "./base/procurementOrder.controller.base";

@swagger.ApiTags("procurementOrders")
@common.Controller("procurementOrders")
export class ProcurementOrderController extends ProcurementOrderControllerBase {
  constructor(protected readonly service: ProcurementOrderService) {
    super(service);
  }
}
