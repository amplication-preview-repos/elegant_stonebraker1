import { Gig } from "../gig/Gig";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  gig?: Gig | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
