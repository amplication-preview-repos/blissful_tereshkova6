import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AccountsService } from "./accounts.service";

@swagger.ApiTags("accounts")
@common.Controller("accounts")
export class AccountsController {
  constructor(protected readonly service: AccountsService) {}
}
