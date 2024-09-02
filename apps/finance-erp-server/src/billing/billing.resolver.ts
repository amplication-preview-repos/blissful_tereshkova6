import * as graphql from "@nestjs/graphql";
import { BillingService } from "./billing.service";

export class BillingResolver {
  constructor(protected readonly service: BillingService) {}
}
