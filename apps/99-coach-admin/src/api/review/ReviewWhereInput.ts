import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GigWhereUniqueInput } from "../gig/GigWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  gig?: GigWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
