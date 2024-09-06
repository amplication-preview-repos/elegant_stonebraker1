import { GigUpdateManyWithoutCategoriesInput } from "./GigUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  gigs?: GigUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
