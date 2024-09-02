import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundRequestService } from "./fundRequest.service";
import { FundRequestControllerBase } from "./base/fundRequest.controller.base";

@swagger.ApiTags("fundRequests")
@common.Controller("fundRequests")
export class FundRequestController extends FundRequestControllerBase {
  constructor(protected readonly service: FundRequestService) {
    super(service);
  }
}
