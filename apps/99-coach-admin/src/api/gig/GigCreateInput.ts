import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutGigsInput } from "./OrderCreateNestedManyWithoutGigsInput";
import { ReviewCreateNestedManyWithoutGigsInput } from "./ReviewCreateNestedManyWithoutGigsInput";

export type GigCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutGigsInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutGigsInput;
  title?: string | null;
};
