import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TreasuryTransactionService } from "./treasuryTransaction.service";
import { TreasuryTransactionControllerBase } from "./base/treasuryTransaction.controller.base";

@swagger.ApiTags("treasuryTransactions")
@common.Controller("treasuryTransactions")
export class TreasuryTransactionController extends TreasuryTransactionControllerBase {
  constructor(protected readonly service: TreasuryTransactionService) {
    super(service);
  }
}
