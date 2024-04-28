import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { RootState } from "../store/index";
import { getTotalPrice } from "../helpers";

import {
    changeQuantity,
    clearOrder,
    confirmOrder,
} from "../store/addItemOrderSlice";
// import { clearOrder, confirmOrder } from "../helpers/getConfirm";

function Order() {
    const addItem = useSelector((state: RootState) => state.addItem.list);
    const dispatch = useDispatch();
    const clearDispatch = useDispatch();
    const confirmDispatch = useDispatch();
    const getTotal = getTotalPrice(addItem);

    return (
        <>
            {addItem.map((el) => (
                <div key={el.id} className="order">
                    <p>{el.name}</p>
                    <Button
                        onClick={() => {
                            dispatch(
                                changeQuantity({ name: el.name, amount: -1 })
                            );
                        }}
                    >
                        -
                    </Button>
                    <p>{el.quantity}</p>
                    <Button
                        onClick={() => {
                            dispatch(
                                changeQuantity({ name: el.name, amount: +1 })
                            );
                        }}
                    >
                        +
                    </Button>
                    <p>{el.price}</p>
                    <p>{el.price * el.quantity}</p>
                </div>
            ))}
            <p> total:{getTotal}</p>
            <Button onClick={() => clearDispatch(clearOrder())}>Cancel</Button>
            <Button onClick={() => confirmDispatch(confirmOrder())}>
                Confirm
            </Button>
        </>
    );
}

export default Order;
