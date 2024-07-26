import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import arrow from '../../img/arrow-back.svg'


export default function Forget() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [servResponse,setServResponse] = useState(null)
    const email = useInput('',{isEmpty: true,maxLength: 30,mailError: true});
    console.log(email.correct)
    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        else {
            navigate('../change')
        }
    }

    return (
        <div className="forget">
            <h1 className="auth__title">Восстановление пароля</h1>
            {servResponse ? <h3 className="auth__response">{servResponse}</h3> : null}
            <form action="" className="auth__form auth-form" method="post">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="email" type='email' input={email}>Email</SmartInput>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" disabled={!email.correct} onClick={(e) => submitHandler(e,{email})}>Продолжить</button>
                </div>
            </form>
            <Link to="../login" className='auth-form__link  auth-form__back'><img src={arrow} alt="back" />Назад</Link>
        </div>
    )
}