import { products } from "../consts";
import { Order } from "../types";


interface ItemsCounts {
    [n: string]: {
        price: number;
        quantity: number;
    };
}
// chek up index signature

function getReport1(orders: Order[]) {
    const items: ItemsCounts = {};
    const date = new Date();
    const curentMonth = date.getMonth();
    const curentYear = date.getFullYear();

    products.forEach(({ name, price }) => {
        items[name] = {
            price: price,
            quantity: 0,
        };
    });
    orders
        .filter((order) => {
            const d = new Date(order.date);
            const m = d.getMonth();
            const year = d.getFullYear();
            return m === curentMonth && year === curentYear;
        })
        .forEach(({ orderItems }) =>
            orderItems.forEach(({ name, quantity }) => {
                items[name].quantity += quantity;
            })
        );
    console.log(items);
    return Object.entries(items)
        .map(([name, { price, quantity }]) => {
            return {
                name,
                price,
                quantity,
            };
        })
        .sort((a, b) => b.quantity - a.quantity);
}

export default getReport1;
