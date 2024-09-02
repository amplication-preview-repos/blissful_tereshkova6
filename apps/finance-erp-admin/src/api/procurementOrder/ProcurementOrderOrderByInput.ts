import { SortOrder } from "../../util/SortOrder";

export type ProcurementOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  supplierName?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
