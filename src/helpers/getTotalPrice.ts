import { OrderItem } from "../types";

function getTotalPrice(order: OrderItem[]): number {
    let totalAmount = 0;

    order.forEach(({ price, quantity }) => {
        totalAmount += quantity * price;
    });

    return totalAmount;
}

export default getTotalPrice;
