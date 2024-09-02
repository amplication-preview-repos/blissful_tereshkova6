/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcurementOrderWhereUniqueInput } from "./ProcurementOrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProcurementOrderUpdateInput } from "./ProcurementOrderUpdateInput";

@ArgsType()
class UpdateProcurementOrderArgs {
  @ApiProperty({
    required: true,
    type: () => ProcurementOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProcurementOrderWhereUniqueInput)
  @Field(() => ProcurementOrderWhereUniqueInput, { nullable: false })
  where!: ProcurementOrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProcurementOrderUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProcurementOrderUpdateInput)
  @Field(() => ProcurementOrderUpdateInput, { nullable: false })
  data!: ProcurementOrderUpdateInput;
}

export { UpdateProcurementOrderArgs as UpdateProcurementOrderArgs };