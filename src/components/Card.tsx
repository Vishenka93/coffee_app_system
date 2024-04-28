// import { products } from "../consts";
// import { Link } from "react-router-dom";
import { Card as BootstrapCard } from "react-bootstrap";
import "../components/style.scss";
import { useDispatch } from "react-redux";
import { addItemOrder } from "../store/addItemOrderSlice";

interface Card {
    id: number;
    name: string;
    img: string;
    price: number;
    category: string;
}

function Card({ id, name, img, price, category }: Card) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addItemOrder({ id, category, name, quantity: 1, price }));
    };

    return (
        <>
            <div onClick={() => handleClick()}>
                <BootstrapCard className="card-item">
                    <img src={img} alt="img" />
                    <p>{name}</p>
                    <p>{price} UAH</p>
                </BootstrapCard>
            </div>
        </>
    );
}

export default Card;
