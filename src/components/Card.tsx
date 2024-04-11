// import { products } from "../consts";
import "../components/style.scss";

interface Card {
    id: number;
    name: string;
    img: string;
    price: number;
    category: string;
}

const Cards: React.FC<Card> = ({ id, name, img, price, category }) => {
    return (
        <div
            className="card-item"
            // onClick={() => addItemToOrder(id, name, price, category)}
        >
            <img src={img} alt="img" />
            <p>{name}</p>
            <p>{price} UAH</p>
        </div>
    );
};

export default Cards;
