import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, NotFoundPage, Reports, Home, CardPage } from "./pages";
import { Header, CardsGrid, End } from "./components";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<MainPage />}>
                    <Route path="/order/:category" element={<CardsGrid />} />
                    <Route path="/order/:category/:id" element={<CardPage />} />
                    <Route path="/order/:category/:id/end" element={<End />} />
                </Route>
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Navigate to={"/404"} replace />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
