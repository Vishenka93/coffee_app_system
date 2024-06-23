import { getReport2, getDateStr } from "../helpers";
// import { useSelector } from "react-redux";
import { Order } from "../types";
import Table from "react-bootstrap/Table";



function Report2() {
    // const addItem = useSelector((state: RootState) => state.addItem.list);
    const orders = JSON.parse(
        localStorage.getItem("confirmedOrders") || "[]"
    ) as Order[];
    const rows = getReport2(orders);

    let totalAmount = 0;

    rows.forEach(({ amount }) => {
        totalAmount += amount;
    });

   
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Bakery</th>
                    <th>Drinks</th>
                    <th>Deserts</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(({ date, drinks, bakery, deserts, amount }) => (
                    <tr key={date}>
                        <td>{getDateStr(+date)}</td>
                        <td>{drinks}</td>
                        <td>{bakery}</td>
                        <td>{deserts}</td>
                        <td>{amount}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        Всього замовлень {rows.length} на сумму {totalAmount}
                        UA
                    </td>
                </tr>
            </tfoot>
        </Table>
    );
}

export default Report2;
