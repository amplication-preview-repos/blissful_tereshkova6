import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  clientName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  invoiceNumber?: SortOrder;
  updatedAt?: SortOrder;
};
