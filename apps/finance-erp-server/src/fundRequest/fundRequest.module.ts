import { Module } from "@nestjs/common";
import { FundRequestModuleBase } from "./base/fundRequest.module.base";
import { FundRequestService } from "./fundRequest.service";
import { FundRequestController } from "./fundRequest.controller";
import { FundRequestResolver } from "./fundRequest.resolver";

@Module({
  imports: [FundRequestModuleBase],
  controllers: [FundRequestController],
  providers: [FundRequestService, FundRequestResolver],
  exports: [FundRequestService],
})
export class FundRequestModule {}
