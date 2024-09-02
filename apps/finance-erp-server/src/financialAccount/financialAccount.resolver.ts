import * as graphql from "@nestjs/graphql";
import { FinancialAccountResolverBase } from "./base/financialAccount.resolver.base";
import { FinancialAccount } from "./base/FinancialAccount";
import { FinancialAccountService } from "./financialAccount.service";

@graphql.Resolver(() => FinancialAccount)
export class FinancialAccountResolver extends FinancialAccountResolverBase {
  constructor(protected readonly service: FinancialAccountService) {
    super(service);
  }
}
