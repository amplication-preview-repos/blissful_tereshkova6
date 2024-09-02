import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "clientName";

export const ContractTitle = (record: TContract): string => {
  return record.clientName?.toString() || String(record.id);
};
