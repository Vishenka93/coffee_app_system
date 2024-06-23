import { Outlet, Link, useLocation } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { reportSelect } from "../consts";
import { getDDReport1 } from "../helpers";
import genereatPdf from "../helpers/generatePDF";
import { Order } from "../types";

function Reports() {
    const [selectedReport, setSelectedReport] = useState<string>("report1");
    const location = useLocation();
    const handleSelect = (eventKey: any) => {
        setSelectedReport(eventKey);
    };

    console.log(location);
    const orders = JSON.parse(
        localStorage.getItem("confirmedOrders") || "[]"
    ) as Order[];

    return (
        <>
            <Button
                onClick={() => {
                    if (location.pathname === "/reports/report1") {
                        const dd = getDDReport1(orders);
                        genereatPdf(dd);
                    }
                    //1 достать из url название репорта
                    //2 сгенерировать dd для этого репорта
                    // 3 вызов generatePDF
                    // genereatPdf(dd);
                    // useParams || useLocation проверить какой подходит
                }}
            >
                Export File
            </Button>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedReport}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {reportSelect.map(({ text, path }) => (
                        <Dropdown.Item
                            key={path}
                            as={Link}
                            to={path}
                            eventKey={text}
                        >
                            {text}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Outlet />
        </>
    );
}

export default Reports;
