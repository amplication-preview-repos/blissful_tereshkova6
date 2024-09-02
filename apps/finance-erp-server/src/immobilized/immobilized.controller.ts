import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImmobilizedService } from "./immobilized.service";

@swagger.ApiTags("immobilizeds")
@common.Controller("immobilizeds")
export class ImmobilizedController {
  constructor(protected readonly service: ImmobilizedService) {}
}
