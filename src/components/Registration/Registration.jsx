import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import { useNavigate } from 'react-router-dom';


export default function Registration() {
    const navigate = useNavigate()
    const email = useInput('',{isEmpty: true,maxLength: 30,mailError: true});
    const name = useInput('',{isEmpty: true,maxLength: 30});
    const surname = useInput('',{isEmpty: true,maxLength: 30});
    const password = useInput('',{isEmpty: true,maxLength: 40});
    const repPassword = useInput('',{isEmpty: true,maxLength: 40});

    const submitHandler = () => {

    }

    const goRegHandler = () => {
        navigate('../registration')
    }

    return (
        <div className="registration">
            <h1 className="auth__title">Регистрация</h1>
            <form action="" className="auth__form auth-form">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="email" type='email' input={email}>Email</SmartInput>
                    <SmartInput className="auth-form__input" name="name" type='text' input={name}>Имя</SmartInput>
                    <SmartInput className="auth-form__input" name="surname" type='text' input={surname}>Фамилия</SmartInput>
                    <SmartInput className="auth-form__input" name="pass" type='password' input={password}>Пароль</SmartInput>
                    <SmartInput className="auth-form__input" name="pass" type='password' input={repPassword}>Повторите пароль</SmartInput>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" onClick={(e) => submitHandler(e,{email,password})}>Зарегистрироваться</button>
                </div>
            </form>
            <p className="auth-form__text auth-form__text_center">Уже есть аккаунт? <span className="auth-form__forget">Войти</span></p>
        </div>
    );
}