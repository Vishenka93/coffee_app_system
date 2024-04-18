import { products } from "../consts";
import { useParams, Link, useLocation } from "react-router-dom";
// import { products } from "../consts";
function CardPage() {
    const { id } = useParams();
    const { pathname } = useLocation();
    console.log(pathname);
    if (!id) {
        return <div>Not Found page</div>;
    }
    const product = products.find((el) => el.id === +id);
    if (!product) {
        return <div>product with id: {id} not found</div>;
    }
    return (
        <div>
            <img src={product.img} alt="" />
            <Link to={`${pathname}/end`}>pidr</Link>
        </div>
    );
}

export default CardPage;
