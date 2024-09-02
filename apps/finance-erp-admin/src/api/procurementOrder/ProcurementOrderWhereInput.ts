import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProcurementOrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
