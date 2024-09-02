import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TreasuryTransactionWhereInput = {
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionType?: "Option1";
};
