import * as graphql from "@nestjs/graphql";
import { AccountsService } from "./accounts.service";

export class AccountsResolver {
  constructor(protected readonly service: AccountsService) {}
}
