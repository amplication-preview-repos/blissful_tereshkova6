import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReportWhereInput = {
  generatedBy?: StringNullableFilter;
  id?: StringFilter;
  reportContent?: StringNullableFilter;
  reportDate?: DateTimeNullableFilter;
};
