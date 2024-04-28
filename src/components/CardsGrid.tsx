import { useParams } from "react-router-dom";
import { Card } from "../components";
import { products } from "../consts";

import "./style.scss";

function CardsGrid() {
    const { category } = useParams();
    return (
        <div className="cards-grid">
            {products
                .filter((el) => el.category === category)
                .map(({ id, name, category, price, img }) => (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        category={category}
                        price={price}
                        img={img}
                    />
                ))}
        </div>
    );
}

export default CardsGrid;
