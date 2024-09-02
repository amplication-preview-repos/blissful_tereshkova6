import * as graphql from "@nestjs/graphql";
import { TreasuryService } from "./treasury.service";

export class TreasuryResolver {
  constructor(protected readonly service: TreasuryService) {}
}
