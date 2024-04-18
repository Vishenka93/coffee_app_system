// import { products } from "../consts";
import { Link, useNavigate } from "react-router-dom";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import "../components/style.scss";

interface Card {
    id: number;
    name: string;
    img: string;
    price: number;
    category: string;
}

const Card: React.FC<Card> = ({ id, name, img, price, category }) => {
    const navigate = useNavigate();
    return (
        <>
            <Link to={`/order/${category}/${id}`}>
                <BootstrapCard
                    className="card-item"
                    // onClick={() => addItemToOrder(id, name, price, category)}
                >
                    <img src={img} alt="img" />
                    <p>{name}</p>
                    <p>{price} UAH</p>
                </BootstrapCard>
            </Link>
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    navigate("/reports");
                }}
                variant="primary"
            >
                Go somewhere
            </Button>
        </>
    );
};

export default Card;
