import { GigWhereUniqueInput } from "../gig/GigWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  gig?: GigWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
