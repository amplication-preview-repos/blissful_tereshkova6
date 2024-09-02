import * as graphql from "@nestjs/graphql";
import { TreasuryTransactionResolverBase } from "./base/treasuryTransaction.resolver.base";
import { TreasuryTransaction } from "./base/TreasuryTransaction";
import { TreasuryTransactionService } from "./treasuryTransaction.service";

@graphql.Resolver(() => TreasuryTransaction)
export class TreasuryTransactionResolver extends TreasuryTransactionResolverBase {
  constructor(protected readonly service: TreasuryTransactionService) {
    super(service);
  }
}
