import { FinancialAccountWhereInput } from "./FinancialAccountWhereInput";
import { FinancialAccountOrderByInput } from "./FinancialAccountOrderByInput";

export type FinancialAccountFindManyArgs = {
  where?: FinancialAccountWhereInput;
  orderBy?: Array<FinancialAccountOrderByInput>;
  skip?: number;
  take?: number;
};
