import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BudgetWhereInput = {
  allocatedAmount?: FloatNullableFilter;
  budgetYear?: IntNullableFilter;
  id?: StringFilter;
  utilizedAmount?: FloatNullableFilter;
};
