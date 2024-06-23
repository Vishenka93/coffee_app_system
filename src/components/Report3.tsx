import { getReport3 } from "../helpers";
import { Order } from "../types";
import Table from "react-bootstrap/Table";

function Report3() {
    const orders = JSON.parse(
        localStorage.getItem("confirmedOrders") || "[]"
    ) as Order[];
    // const rows = getReport3(orders);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            {/* <tbody>
                {rows.map(([date, { totalPerDay }]) => (
                    <tr key={date}>
                        <td>{date}</td>
                        <td>{totalPerDay}</td>
                    </tr>
                ))}
            </tbody> */}
            <tfoot>
                <tr>
                    <td>Total:</td>
                    {/* <td>{totalAmount}</td> */}
                </tr>
            </tfoot>
        </Table>
    );
}

export default Report3;
