import { SortOrder } from "../../util/SortOrder";

export type TreasuryTransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
