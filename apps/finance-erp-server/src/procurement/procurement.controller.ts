import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProcurementService } from "./procurement.service";

@swagger.ApiTags("procurements")
@common.Controller("procurements")
export class ProcurementController {
  constructor(protected readonly service: ProcurementService) {}
}
