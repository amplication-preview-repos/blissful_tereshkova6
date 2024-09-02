import * as graphql from "@nestjs/graphql";
import { ReportsService } from "./reports.service";

export class ReportsResolver {
  constructor(protected readonly service: ReportsService) {}
}
