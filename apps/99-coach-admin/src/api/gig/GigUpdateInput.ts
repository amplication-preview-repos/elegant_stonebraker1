import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutGigsInput } from "./OrderUpdateManyWithoutGigsInput";
import { ReviewUpdateManyWithoutGigsInput } from "./ReviewUpdateManyWithoutGigsInput";

export type GigUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  orders?: OrderUpdateManyWithoutGigsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutGigsInput;
  title?: string | null;
};
