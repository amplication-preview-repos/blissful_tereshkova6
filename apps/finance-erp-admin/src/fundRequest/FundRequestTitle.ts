import { FundRequest as TFundRequest } from "../api/fundRequest/FundRequest";

export const FUNDREQUEST_TITLE_FIELD = "id";

export const FundRequestTitle = (record: TFundRequest): string => {
  return record.id?.toString() || String(record.id);
};
