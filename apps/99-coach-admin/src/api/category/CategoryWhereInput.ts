import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GigListRelationFilter } from "../gig/GigListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  gigs?: GigListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
