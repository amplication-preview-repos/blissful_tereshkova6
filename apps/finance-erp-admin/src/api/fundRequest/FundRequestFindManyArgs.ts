import { FundRequestWhereInput } from "./FundRequestWhereInput";
import { FundRequestOrderByInput } from "./FundRequestOrderByInput";

export type FundRequestFindManyArgs = {
  where?: FundRequestWhereInput;
  orderBy?: Array<FundRequestOrderByInput>;
  skip?: number;
  take?: number;
};
