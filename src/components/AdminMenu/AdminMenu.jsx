import AdminMenuItem from "./AdminMenuItem"
import { useState } from "react";
export default function AdminMenu() {
    const [currentCategory, setCurrentCategory] = useState("users");
    return (
        <nav className="admin__menu admin-menu">
            <AdminMenuItem category="users" current={currentCategory} setter={setCurrentCategory}>Пользователи</AdminMenuItem>
            <AdminMenuItem category="categories" current={currentCategory} setter={setCurrentCategory}>Категории</AdminMenuItem>
            <AdminMenuItem category="projects" current={currentCategory} setter={setCurrentCategory}>Проекты</AdminMenuItem>
            <AdminMenuItem category="resumes" current={currentCategory} setter={setCurrentCategory}>Резюме</AdminMenuItem>
            <AdminMenuItem category="responses" current={currentCategory} setter={setCurrentCategory}>Отклики</AdminMenuItem>
        </nav>
    )
}