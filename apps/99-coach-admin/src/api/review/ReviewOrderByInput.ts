import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  gigId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
