import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
export default function MainLayout() {
    return (
        <div className="page__mainLayout mainLayout">
            <Header></Header>
            <Outlet />
        </div>
    );
}
