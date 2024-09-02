import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportsService } from "./reports.service";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportsController {
  constructor(protected readonly service: ReportsService) {}
}
