import { Gig } from "../gig/Gig";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  gig?: Gig | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
