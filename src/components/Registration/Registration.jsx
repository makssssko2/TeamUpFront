import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Registration() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [servResponse,setServResponse] = useState(null)

    const email = useInput('',{isEmpty: true,maxLength: 30,mailError: true});
    const name = useInput('',{isEmpty: true,maxLength: 30});
    const surname = useInput('',{isEmpty: true,maxLength: 30});
    const password = useInput('',{isEmpty: true,maxLength: 40});
    const repPassword = useInput('',{isEmpty: true,maxLength: 40,passEqual: password.value});

    const submitHandler = (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        else {
            auth.reg(inputs.email.value,inputs.password.value,inputs.surname.value,inputs.name.value)
            .then(res => {
                setServResponse(res);
            })
        }
    }

    useEffect(() => {
        if(auth.isAuth) {
            navigate('../..')
        }
    },[auth.isAuth])

    return (
        <div className="registration">
            <h1 className="auth__title">Регистрация</h1>
            {servResponse ? <h3 className="auth__response">{servResponse}</h3> : null}
            <form action="" className="auth__form auth-form" method="post">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="email" type='email' input={email}>Email</SmartInput>
                    <SmartInput className="auth-form__input" name="name" type='text' input={name}>Имя</SmartInput>
                    <SmartInput className="auth-form__input" name="surname" type='text' input={surname}>Фамилия</SmartInput>
                    <SmartInput className="auth-form__input" name="pass" type='password' input={password}>Пароль</SmartInput>
                    <SmartInput className="auth-form__input" name="passRep" type='password' input={repPassword}>Повторите пароль</SmartInput>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" onClick={(e) => submitHandler(e,{email,password,name,surname,repPassword})}>Зарегистрироваться</button>
                </div>
            </form>
            <p className="auth-form__text auth-form__text_center">Уже есть аккаунт? <Link to="../login" className="auth-form__forget">Войти</Link></p>
        </div>
    );
}