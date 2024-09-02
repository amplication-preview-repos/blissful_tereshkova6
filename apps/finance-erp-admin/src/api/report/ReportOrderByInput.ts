import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  generatedBy?: SortOrder;
  id?: SortOrder;
  reportContent?: SortOrder;
  reportDate?: SortOrder;
  updatedAt?: SortOrder;
};
