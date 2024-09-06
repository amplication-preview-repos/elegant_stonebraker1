import { GigWhereInput } from "./GigWhereInput";
import { GigOrderByInput } from "./GigOrderByInput";

export type GigFindManyArgs = {
  where?: GigWhereInput;
  orderBy?: Array<GigOrderByInput>;
  skip?: number;
  take?: number;
};
