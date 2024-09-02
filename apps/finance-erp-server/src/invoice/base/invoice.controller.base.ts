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
import { InvoiceService } from "../invoice.service";
import { InvoiceCreateInput } from "./InvoiceCreateInput";
import { Invoice } from "./Invoice";
import { InvoiceFindManyArgs } from "./InvoiceFindManyArgs";
import { InvoiceWhereUniqueInput } from "./InvoiceWhereUniqueInput";
import { InvoiceUpdateInput } from "./InvoiceUpdateInput";

export class InvoiceControllerBase {
  constructor(protected readonly service: InvoiceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Invoice })
  async createInvoice(
    @common.Body() data: InvoiceCreateInput
  ): Promise<Invoice> {
    return await this.service.createInvoice({
      data: data,
      select: {
        amount: true,
        clientName: true,
        createdAt: true,
        id: true,
        invoiceDate: true,
        invoiceNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Invoice] })
  @ApiNestedQuery(InvoiceFindManyArgs)
  async invoices(@common.Req() request: Request): Promise<Invoice[]> {
    const args = plainToClass(InvoiceFindManyArgs, request.query);
    return this.service.invoices({
      ...args,
      select: {
        amount: true,
        clientName: true,
        createdAt: true,
        id: true,
        invoiceDate: true,
        invoiceNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async invoice(
    @common.Param() params: InvoiceWhereUniqueInput
  ): Promise<Invoice | null> {
    const result = await this.service.invoice({
      where: params,
      select: {
        amount: true,
        clientName: true,
        createdAt: true,
        id: true,
        invoiceDate: true,
        invoiceNumber: true,
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
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInvoice(
    @common.Param() params: InvoiceWhereUniqueInput,
    @common.Body() data: InvoiceUpdateInput
  ): Promise<Invoice | null> {
    try {
      return await this.service.updateInvoice({
        where: params,
        data: data,
        select: {
          amount: true,
          clientName: true,
          createdAt: true,
          id: true,
          invoiceDate: true,
          invoiceNumber: true,
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
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInvoice(
    @common.Param() params: InvoiceWhereUniqueInput
  ): Promise<Invoice | null> {
    try {
      return await this.service.deleteInvoice({
        where: params,
        select: {
          amount: true,
          clientName: true,
          createdAt: true,
          id: true,
          invoiceDate: true,
          invoiceNumber: true,
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
