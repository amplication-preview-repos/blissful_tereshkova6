import * as graphql from "@nestjs/graphql";
import { ImmobilizedService } from "./immobilized.service";

export class ImmobilizedResolver {
  constructor(protected readonly service: ImmobilizedService) {}
}
