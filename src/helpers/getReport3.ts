import getReport2 from "./getReport2";
import { Order } from "../types";

interface ItemsCounts {
    [n: string]: {
        date: number;
        amount: number;
        totalPerDay: number;
    };
}

function getReports3(orders: Order[]) {
    const items: ItemsCounts = {};
    const everyOrder = getReport2(orders);

    everyOrder.forEach(({ date, amount }) => {
        //   const cutDate = date.slice(0, 11);

        if (items[date] === undefined) {
            items[date] = {
                totalPerDay: 0,
            };
        }

        items[date].totalPerDay += amount;
    });
    console.log(items);
    return Object.entries(items);
}

export default getReports3;
