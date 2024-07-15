import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registration';
import MainLayout from './components/MainLayout/MainLayout';
import Forget from './components/Forget/Forget';
import ChangePass from './components/ChangePass/ChangePass';
import HomePage from './pages/HomePage/HomePage';
import AuthLayout from './pages/AuthPage/AuthLayout';
import './css/fonts.css';
import './css/index.css';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/registration" element={<Registration />} />
                <Route path="/auth/forget" element={<Forget />} />
                <Route path="/auth/change" element={<ChangePass />} />
            </Route>
        </Routes>
    );
}
