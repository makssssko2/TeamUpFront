export default function SmartInput({ children, className, type, name, input }) {
    return (
        <div className="auth-form__inputBlock">
            <input
                value={input.value}
                onChange={(e) => input.onChange(e)}
                onBlur={() => input.onBlur()}
                type={type}
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
