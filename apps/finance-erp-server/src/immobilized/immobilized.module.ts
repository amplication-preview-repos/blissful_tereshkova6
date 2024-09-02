import { Module } from "@nestjs/common";
import { ImmobilizedService } from "./immobilized.service";
import { ImmobilizedController } from "./immobilized.controller";
import { ImmobilizedResolver } from "./immobilized.resolver";

@Module({
  controllers: [ImmobilizedController],
  providers: [ImmobilizedService, ImmobilizedResolver],
  exports: [ImmobilizedService],
})
export class ImmobilizedModule {}
