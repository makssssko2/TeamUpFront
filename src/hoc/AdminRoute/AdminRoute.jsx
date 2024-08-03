import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

export default function AdminRoute() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        navigate('/admin/users');
    },[])

    if (auth.user?.role === "ADMIN") {
        return <Navigate to="/" />;
    }

    return (
        <main className="mainLayout__admin admin">
            <div className="admin__container container">
                <AdminMenu />
                <Outlet />
            </div>
        </main>
    );
}
