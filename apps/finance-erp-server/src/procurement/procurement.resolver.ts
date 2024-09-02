import * as graphql from "@nestjs/graphql";
import { ProcurementService } from "./procurement.service";

export class ProcurementResolver {
  constructor(protected readonly service: ProcurementService) {}
}
