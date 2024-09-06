import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Gig = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
};
