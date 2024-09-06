import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type GigWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
};
