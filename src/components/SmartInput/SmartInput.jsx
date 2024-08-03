import { useState } from "react";
import close from "../../img/closeeye.svg";
import open from "../../img/openeye.svg";

export default function SmartInput({ children, className, type, name, input }) {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="auth-form__inputBlock">
            <input
                value={input.value}
                onChange={(e) => input.onChange(e)}
                onBlur={() => input.onBlur()}
                type={
                    type === "password"
                        ? showPass
                            ? "text"
                            : "password"
                        : type
                }
                className={
                    Object.values(input.errors).filter((err) => err).length &&
                    input.isDirty
                        ? `${className} ${className}_error`
                        : className
                }
                name={name}
                id={name}
                placeholder={children}
            />
            {type === "password" ? (
                showPass ? (
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="auth-form__eye"
                    >
                        <img src={open} alt="openeye"></img>
                    </button>
                ) : (
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="auth-form__eye"
                    >
                        <img src={close} alt="closeeye"></img>
                    </button>
                )
            ) : null}
            <div className="auth-form__errors">
                {input.isDirty
                    ? Object.values(input.errors)
                          .filter((err) => err)
                          .map((err, index) => {
                              return (
                                  <p className="auth-form__error" key={index}>
                                      {err}
                                  </p>
                              );
                          })
                    : null}
            </div>
        </div>
    );
}
