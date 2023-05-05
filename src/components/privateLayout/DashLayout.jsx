import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="dashLayout">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}

export default DashLayout