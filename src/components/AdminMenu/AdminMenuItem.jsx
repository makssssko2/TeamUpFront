import { useNavigate } from "react-router-dom";

export default function AdminMenuItem({ children, category, ...props }) {
    const navigate = useNavigate();
    const clickHandler = () => {
        props.setter(category);
        navigate(`/admin/${category}`);
    };
    return (
        <button
            className={
                category == props.current
                    ? "admin-menu__item admin-menu__item_active"
                    : "admin-menu__item"
            }
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}
