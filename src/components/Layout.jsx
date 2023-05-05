import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="publicLayout">
            <Outlet/>
        </div>
    )
    };

export default Layout;