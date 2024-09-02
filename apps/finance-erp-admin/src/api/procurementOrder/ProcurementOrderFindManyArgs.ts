import { ProcurementOrderWhereInput } from "./ProcurementOrderWhereInput";
import { ProcurementOrderOrderByInput } from "./ProcurementOrderOrderByInput";

export type ProcurementOrderFindManyArgs = {
  where?: ProcurementOrderWhereInput;
  orderBy?: Array<ProcurementOrderOrderByInput>;
  skip?: number;
  take?: number;
};
