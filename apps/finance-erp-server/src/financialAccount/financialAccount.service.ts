import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialAccountServiceBase } from "./base/financialAccount.service.base";

@Injectable()
export class FinancialAccountService extends FinancialAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
