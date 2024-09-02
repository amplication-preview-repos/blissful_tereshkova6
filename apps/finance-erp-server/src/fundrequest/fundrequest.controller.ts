import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FundRequestService } from "./fundrequest.service";

@swagger.ApiTags("fundRequests")
@common.Controller("fundRequests")
export class FundRequestController {
  constructor(protected readonly service: FundRequestService) {}
}
