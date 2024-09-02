import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  clientName?: StringNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceNumber?: StringNullableFilter;
};
