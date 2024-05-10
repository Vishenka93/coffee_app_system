import { OrderItem } from "./OrderItem";

interface Order {
    orderItems: OrderItem[];
    date: number;
}

export type { Order };
