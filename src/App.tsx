import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, NotFoundPage, Reports, Home } from "./pages";
import { Header, CardsGrid, Report1 } from "./components";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<MainPage />}>
                    <Route path="/order/:category" element={<CardsGrid />} />
                </Route>
                <Route path="/reports" element={<Reports />}>
                    <Route path="/reports/report1" element={<Report1 />} />
                    {/* <Route path="/reports/report2" element={<Report2 />} /> */}
                </Route>
                <Route path="*" element={<Navigate to={"/404"} replace />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
