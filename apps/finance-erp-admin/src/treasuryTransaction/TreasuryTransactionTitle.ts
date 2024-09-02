import { TreasuryTransaction as TTreasuryTransaction } from "../api/treasuryTransaction/TreasuryTransaction";

export const TREASURYTRANSACTION_TITLE_FIELD = "id";

export const TreasuryTransactionTitle = (
  record: TTreasuryTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
