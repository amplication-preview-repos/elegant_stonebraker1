import { Gig as TGig } from "../api/gig/Gig";

export const GIG_TITLE_FIELD = "title";

export const GigTitle = (record: TGig): string => {
  return record.title?.toString() || String(record.id);
};
