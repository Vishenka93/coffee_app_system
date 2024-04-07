import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, NotFoundPage, Reports } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Navigate to={"/404"} replace />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
