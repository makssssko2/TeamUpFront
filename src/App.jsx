import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import MainLayout from "./components/MainLayout/MainLayout";
import Forget from "./components/Forget/Forget";
import ChangePass from "./components/ChangePass/ChangePass";
import HomePage from "./pages/HomePage/HomePage";
import AuthLayout from "./pages/AuthPage/AuthLayout";
import Confirm from "./components/Confirm/Confirm";
import AdminRoute from "./hoc/AdminRoute/AdminRoute";
import AdminUsers from './components/AdminUsers/AdminUsers';
import AdminCategories from "./components/AdminCategories/AdminCategories";
import AdminProjects from "./components/AdminProjects/AdminProjects";
import AdminResumes from "./components/AdminResumes/AdminResumes";
import AdminResponses from "./components/AdminResponses/AdminResponses";
import "./css/fonts.css";
import "./css/index.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="/admin" element={<AdminRoute />}>
                    <Route path="/admin/users" element={<AdminUsers />}/>
                    <Route path="/admin/categories" element={<AdminCategories />}/>
                    <Route path="/admin/projects" element={<AdminProjects />}/>
                    <Route path="/admin/resumes" element={<AdminResumes />}/>
                    <Route path="/admin/responses" element={<AdminResponses />}/>
                </Route>
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/registration" element={<Registration />} />
                <Route path="/auth/forget" element={<Forget />} />
                <Route path="/auth/confirm" element={<Confirm />}></Route>
                <Route path="/auth/change" element={<ChangePass />} />
            </Route>
        </Routes>
    );
}
