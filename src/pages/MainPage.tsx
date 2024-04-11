import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CardsGrid } from "../components";

function MainPage() {
    const [count, setCount] = useState<number>(0);
    const [title, setTitle] = useState<string>("");

    return (
        <div>
            <Outlet />
            <CardsGrid />
        </div>
    );
}

export default MainPage;
