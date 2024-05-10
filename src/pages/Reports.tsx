import { Outlet, Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
import genereatPdf from "../helpers/generatePDF";

function Reports() {
    const [selectedReport, setSelectedReport] = useState<string>("report1");

    const handleSelect = (eventKey: any) => {
        setSelectedReport(eventKey);
    };
    genereatPdf();
    return (
        <>
            <Button>Export File</Button>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedReport}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to="/reports/report1"
                        eventKey="report1"
                    >
                        Report1
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="report2">Report2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Outlet />
        </>
    );
}

export default Reports;
