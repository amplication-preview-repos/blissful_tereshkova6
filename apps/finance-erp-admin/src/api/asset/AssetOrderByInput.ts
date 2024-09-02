import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
