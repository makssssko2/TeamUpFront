import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const email = useInput('',{isEmpty: true,maxLength: 30,mailError: true});
    const password = useInput('',{isEmpty: true,maxLength: 40});

    const submitHandler = () => {

    }

    const goRegHandler = () => {
        navigate('../registration')
    }

    return (
        <div className="login">
            <h1 className="auth__title">Авторизация</h1>
            <form action="" className="auth__form auth-form">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="email" type='email' input={email}>Email</SmartInput>
                    <SmartInput className="auth-form__input" name="pass" type='password' input={password}>Пароль</SmartInput>
                    <span className="auth-form__forget">Забыли пароль?</span>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" onClick={(e) => submitHandler(e,{email,password})}>Войти</button>
                    <button className="auth-form__button auth-form__button_sub" onClick={(e) => goRegHandler(e)}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}
