import { GigWhereUniqueInput } from "../gig/GigWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  gig?: GigWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
