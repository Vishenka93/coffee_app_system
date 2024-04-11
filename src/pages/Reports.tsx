import { useLocation } from "react-router-dom";

function Reports() {
    const location = useLocation();
    const path = location.pathname.split("/");
    const category = path[path.length - 1];

    // console.log(location);s
    return <div>Reports</div>;
}

export default Reports;
