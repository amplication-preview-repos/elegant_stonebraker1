import { GigWhereUniqueInput } from "../gig/GigWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  gig?: GigWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
