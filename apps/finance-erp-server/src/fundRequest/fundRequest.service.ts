import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundRequestServiceBase } from "./base/fundRequest.service.base";

@Injectable()
export class FundRequestService extends FundRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
