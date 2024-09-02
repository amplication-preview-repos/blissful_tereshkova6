import * as graphql from "@nestjs/graphql";
import { FundRequestService } from "./fundrequest.service";

export class FundRequestResolver {
  constructor(protected readonly service: FundRequestService) {}
}
