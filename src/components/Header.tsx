import { Link } from "react-router-dom";
import { navigation } from "../consts";

function Header() {
    return (
        <div>
            {navigation.map(({ id, text, path }) => (
                <Link key={id} to={path}>
                    {text}
                </Link>
            ))}
        </div>
    );
}

export default Header;
