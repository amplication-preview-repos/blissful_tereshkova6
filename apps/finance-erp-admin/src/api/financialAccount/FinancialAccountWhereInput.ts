import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FinancialAccountWhereInput = {
  accountName?: StringNullableFilter;
  accountNumber?: StringNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
};
