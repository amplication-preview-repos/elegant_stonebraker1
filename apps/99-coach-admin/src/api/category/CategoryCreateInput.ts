import { GigCreateNestedManyWithoutCategoriesInput } from "./GigCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  gigs?: GigCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
