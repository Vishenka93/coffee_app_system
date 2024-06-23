import { getReport1 } from "../helpers";
// import { useSelector } from "react-redux";
import { Order } from "../types";
import Table from "react-bootstrap/Table";
// import { RootState } from "../store/index";
// import { OrderItem } from "../types";

function Report1() {
    // const addItem = useSelector((state: RootState) => state.addItem.list);
    const orders = JSON.parse(
        localStorage.getItem("confirmedOrders") || "[]"
    ) as Order[];
    const rows = getReport1(orders);
    let totalQuantity = 0;
    let totalAmount = 0;

    rows.forEach(({ price, quantity }) => {
        totalQuantity += quantity;
        totalAmount += quantity * price;
    });

    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(({ name, price, quantity }, index) => (
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{price * quantity}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td>-</td>
                    <td>{totalQuantity}</td>
                    <td>{totalAmount} UAH</td>
                </tr>
            </tfoot>
        </Table>
    );
}

export default Report1;
