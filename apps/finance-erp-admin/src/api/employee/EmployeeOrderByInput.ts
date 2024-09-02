import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
};
