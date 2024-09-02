import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TreasuryService } from "./treasury.service";

@swagger.ApiTags("treasuries")
@common.Controller("treasuries")
export class TreasuryController {
  constructor(protected readonly service: TreasuryService) {}
}
