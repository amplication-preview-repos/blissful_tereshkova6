/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ContractService } from "../contract.service";
import { ContractCreateInput } from "./ContractCreateInput";
import { Contract } from "./Contract";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractWhereUniqueInput } from "./ContractWhereUniqueInput";
import { ContractUpdateInput } from "./ContractUpdateInput";

export class ContractControllerBase {
  constructor(protected readonly service: ContractService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contract })
  async createContract(
    @common.Body() data: ContractCreateInput
  ): Promise<Contract> {
    return await this.service.createContract({
      data: data,
      select: {
        clientName: true,
        contractNumber: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contract] })
  @ApiNestedQuery(ContractFindManyArgs)
  async contracts(@common.Req() request: Request): Promise<Contract[]> {
    const args = plainToClass(ContractFindManyArgs, request.query);
    return this.service.contracts({
      ...args,
      select: {
        clientName: true,
        contractNumber: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    const result = await this.service.contract({
      where: params,
      select: {
        clientName: true,
        contractNumber: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContract(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() data: ContractUpdateInput
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        where: params,
        data: data,
        select: {
          clientName: true,
          contractNumber: true,
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract({
        where: params,
        select: {
          clientName: true,
          contractNumber: true,
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
