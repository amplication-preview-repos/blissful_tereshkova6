import { TreasuryTransactionWhereInput } from "./TreasuryTransactionWhereInput";
import { TreasuryTransactionOrderByInput } from "./TreasuryTransactionOrderByInput";

export type TreasuryTransactionFindManyArgs = {
  where?: TreasuryTransactionWhereInput;
  orderBy?: Array<TreasuryTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
