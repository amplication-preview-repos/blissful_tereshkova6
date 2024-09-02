import { Module } from "@nestjs/common";
import { FundRequestService } from "./fundrequest.service";
import { FundRequestController } from "./fundrequest.controller";
import { FundRequestResolver } from "./fundrequest.resolver";

@Module({
  controllers: [FundRequestController],
  providers: [FundRequestService, FundRequestResolver],
  exports: [FundRequestService],
})
export class FundRequestModule {}
