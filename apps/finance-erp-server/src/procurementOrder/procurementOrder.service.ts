import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcurementOrderServiceBase } from "./base/procurementOrder.service.base";

@Injectable()
export class ProcurementOrderService extends ProcurementOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
