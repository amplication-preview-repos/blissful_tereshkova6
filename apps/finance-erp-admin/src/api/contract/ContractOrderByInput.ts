import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  clientName?: SortOrder;
  contractNumber?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
