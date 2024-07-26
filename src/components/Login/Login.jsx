import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Login() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [servResponse,setServResponse] = useState(null)

    const email = useInput('',{isEmpty: true,maxLength: 30,mailError: true});
    const password = useInput('',{isEmpty: true,maxLength: 40});

    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        else {
            auth.login(inputs.email.value,inputs.password.value)
            .then(res => {
                console.log('Res:',res)
                setServResponse(res);
            })
        }
    }

    const goRegHandler = () => {
        navigate('../registration')
    }

    useEffect(() => {
        if(auth.isAuth) {
            navigate('/')
        }
    },[auth.isAuth])

    return (
        <div className="login">
            <h1 className="auth__title">Авторизация</h1>
            {servResponse ? <h3 className="auth__response">{servResponse}</h3> : null}
            <form action="" className="auth__form auth-form" method="post">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="email" type='email' input={email}>Email</SmartInput>
                    <SmartInput className="auth-form__input" name="pass" type='password' input={password}>Пароль</SmartInput>
                    <Link to="../forget" className="auth-form__forget auth-form__link">Забыли пароль?</Link>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" onClick={(e) => submitHandler(e,{email,password})}>Войти</button>
                    <button className="auth-form__button auth-form__button_sub" onClick={(e) => goRegHandler(e)}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}
