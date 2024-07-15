import { Outlet } from 'react-router-dom'
import logo from '../../img/logo-auth.svg'

export default function AuthLayout() {
    return (
        <div className="page__auth auth">
            <div className="auth__container">
                <img src={logo} alt="logo" className="auth__logo" />
                <div className="auth__form-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}