import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, NotFoundPage, Reports, Home } from "./pages";
import { Header } from "./components";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<MainPage />}>
                    <Route path="/order/deserts" />
                    <Route path="/order/drinks" />
                    <Route path="/order/bakery" />
                </Route>
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Navigate to={"/404"} replace />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
