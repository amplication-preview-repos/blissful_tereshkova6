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
import { FundRequestWhereInput } from "./FundRequestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FundRequestCountArgs {
  @ApiProperty({
    required: false,
    type: () => FundRequestWhereInput,
  })
  @Field(() => FundRequestWhereInput, { nullable: true })
  @Type(() => FundRequestWhereInput)
  where?: FundRequestWhereInput;
}

export { FundRequestCountArgs as FundRequestCountArgs };
