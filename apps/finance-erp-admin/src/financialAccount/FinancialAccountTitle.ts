import { FinancialAccount as TFinancialAccount } from "../api/financialAccount/FinancialAccount";

export const FINANCIALACCOUNT_TITLE_FIELD = "accountName";

export const FinancialAccountTitle = (record: TFinancialAccount): string => {
  return record.accountName?.toString() || String(record.id);
};
