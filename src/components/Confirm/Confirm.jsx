import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../../img/arrow-back.svg";
import Timer from "../Timer/Timer";

export default function Confirm() {
    const [servResponse, setServResponse] = useState(null);
    const [wait, setWait] = useState(true);
    const submitHandler = async (e) => {
        e.preventDefault();
        setWait(true);
    };

    return (
        <div className="confirm">
            <h1 className="auth__title">Потверждение почты</h1>
            {servResponse ? (
                <h3 className="auth__response">{servResponse}</h3>
            ) : null}
            <p className="auth__text">
                Письмо с потверждением было выслано Вам на почту. Нажмите на
                ссылку, чтобы потвердить свой email.<br></br>
                <br></br> Если Вы не получили письмо, проверте папку “Спам” или
                запросите новое письмо.
            </p>
            <form action="" className="auth__form auth-form" method="post">
                <div className="auth-form__buttons">
                    <button
                        className="auth-form__button auth-form__button_main"
                        onClick={(e) => submitHandler(e)}
                        disabled={wait}
                    >
                        Отправить повторно
                    </button>
                    {wait ? (
                        <p className="auth__text">
                            Запросите новое письмо через:{" "}
                            <Timer
                                seconds={30}
                                callback={() => setWait(false)}
                            />
                        </p>
                    ) : null}
                </div>
            </form>
            <Link to="../login" className="auth-form__link auth-form__back">
                <img src={arrow} alt="back" />
                Назад
            </Link>
        </div>
    );
}
