import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  allocatedAmount?: SortOrder;
  budgetYear?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  utilizedAmount?: SortOrder;
};
