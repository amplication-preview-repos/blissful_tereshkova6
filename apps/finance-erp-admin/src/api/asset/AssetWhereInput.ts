import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AssetWhereInput = {
  assetName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  purchaseDate?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
