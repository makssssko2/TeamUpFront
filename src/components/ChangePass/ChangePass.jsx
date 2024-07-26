import {useInput} from './../../hooks/authHooks'
import SmartInput from '../SmartInput/SmartInput';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function ChangePass() {
    const [servResponse,setServResponse] = useState(null)

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
          
        }
    }

    return (
        <div className="change">
            <h1 className="auth__title">Изменение пароля</h1>
            {servResponse ? <h3 className="auth__response">{servResponse}</h3> : null}
            <form action="" className="auth__form auth-form" method="post">
                <div className="auth-form__inputs">
                    <SmartInput className="auth-form__input" name="pass" type='password' input={password}>Введите новый пароль</SmartInput>
                    <SmartInput className="auth-form__input" name="passRep" type='password' input={repPassword}>Повторите новый пароль</SmartInput>
                </div>
                <div className="auth-form__buttons">
                    <button className="auth-form__button auth-form__button_main" onClick={(e) => submitHandler(e,{password,repPassword})}>Изменить пароль</button>
                </div>
            </form>
        </div>
    );
}