import { Gig } from "../gig/Gig";

export type Category = {
  createdAt: Date;
  description: string | null;
  gigs?: Array<Gig>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
