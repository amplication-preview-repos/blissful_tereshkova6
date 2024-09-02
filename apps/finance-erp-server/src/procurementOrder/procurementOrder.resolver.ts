import * as graphql from "@nestjs/graphql";
import { ProcurementOrderResolverBase } from "./base/procurementOrder.resolver.base";
import { ProcurementOrder } from "./base/ProcurementOrder";
import { ProcurementOrderService } from "./procurementOrder.service";

@graphql.Resolver(() => ProcurementOrder)
export class ProcurementOrderResolver extends ProcurementOrderResolverBase {
  constructor(protected readonly service: ProcurementOrderService) {
    super(service);
  }
}
