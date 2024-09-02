import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "generatedBy";

export const ReportTitle = (record: TReport): string => {
  return record.generatedBy?.toString() || String(record.id);
};
