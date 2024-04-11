import { Link, useLocation } from "react-router-dom";
import { Card } from "../components";
import { products, categories } from "../consts";

function CardsGrid() {
    const location = useLocation();
    const path = location.pathname.split("/");
    const category = path[path.length - 1];

    //  console.log(products);
    return (
        <div className="cards-grid">
            <ul>
                {categories.map(({ id, text, path }) => (
                    <li id={id.toString()}>
                        <Link to={path}>{text}</Link>
                    </li>
                ))}
            </ul>
            {products
                .filter((el) => el.category === category)
                .map(({ id, name, category, price, img }) => (
                    <Card
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
