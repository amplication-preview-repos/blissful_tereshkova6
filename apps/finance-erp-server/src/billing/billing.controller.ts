import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BillingService } from "./billing.service";

@swagger.ApiTags("billings")
@common.Controller("billings")
export class BillingController {
  constructor(protected readonly service: BillingService) {}
}
