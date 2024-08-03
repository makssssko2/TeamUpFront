import logo from './../../img/logo-auth.svg'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="mainLayout__header header">
            <div className="header__container container">
                <img src={logo} alt="Лого" className="header__logo" />
                <nav className="header__nav header-nav">
                    <button type="button" className="header-nav__button" onClick={() => navigate('./admin')}>Админка</button>
                    <button type="button" className="header-nav__button">Создать проект</button>
                    <button type="button" className="header-nav__button" onClick={() => navigate('/auth/login')}>Войти</button>
                    <button type="button" className="header-nav__button" onClick={() => localStorage.removeItem('token')}>Выйти</button>
                </nav>
            </div>
        </header>
    )
}