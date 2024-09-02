import { SortOrder } from "../../util/SortOrder";

export type FinancialAccountOrderByInput = {
  accountName?: SortOrder;
  accountNumber?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
