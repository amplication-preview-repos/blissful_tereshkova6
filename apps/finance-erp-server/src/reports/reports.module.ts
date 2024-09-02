import { Module } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { ReportsController } from "./reports.controller";
import { ReportsResolver } from "./reports.resolver";

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, ReportsResolver],
  exports: [ReportsService],
})
export class ReportsModule {}
