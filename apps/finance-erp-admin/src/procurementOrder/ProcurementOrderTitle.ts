import { ProcurementOrder as TProcurementOrder } from "../api/procurementOrder/ProcurementOrder";

export const PROCUREMENTORDER_TITLE_FIELD = "supplierName";

export const ProcurementOrderTitle = (record: TProcurementOrder): string => {
  return record.supplierName?.toString() || String(record.id);
};
