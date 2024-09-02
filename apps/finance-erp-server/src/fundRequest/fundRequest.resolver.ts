import * as graphql from "@nestjs/graphql";
import { FundRequestResolverBase } from "./base/fundRequest.resolver.base";
import { FundRequest } from "./base/FundRequest";
import { FundRequestService } from "./fundRequest.service";

@graphql.Resolver(() => FundRequest)
export class FundRequestResolver extends FundRequestResolverBase {
  constructor(protected readonly service: FundRequestService) {
    super(service);
  }
}
