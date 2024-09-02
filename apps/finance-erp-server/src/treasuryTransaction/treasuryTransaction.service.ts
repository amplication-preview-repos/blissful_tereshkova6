import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TreasuryTransactionServiceBase } from "./base/treasuryTransaction.service.base";

@Injectable()
export class TreasuryTransactionService extends TreasuryTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
