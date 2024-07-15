import { useState, useEffect } from "react";

const useValid = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [birthError, setBirthError] = useState(false);
    const [errors, setErrors] = useState({});
    const [correct, setCorrect] = useState(false);
    useEffect(() => {
        const tempErrs = errors;
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    if (value && value.replace(/\s/g, "").length) {
                        setIsEmpty(false);
                        tempErrs["isEmpty"] = null;
                        setErrors(tempErrs);
                    } else {
                        setIsEmpty(true);
                        tempErrs["isEmpty"] = "Поле не должно быть пустым..";
                        setErrors(tempErrs);
                    }
                    break;
                case "minLength":
                    if (value.length < validations[validation]) {
                        setMinLengthError(true);
                        tempErrs[
                            "minLength"
                        ] = `Поле должно содержать минимум ${validations[validation]} символов`;
                        setErrors(tempErrs);
                    } else {
                        setMinLengthError(false);
                        tempErrs["minLength"] = null;
                        setErrors(tempErrs);
                    }
                    break;
                case "maxLength":
                    if (value.length > validations[validation]) {
                        setMaxLengthError(true);
                        tempErrs[
                            "maxLength"
                        ] = `Поле должно содержать максимум ${validations[validation]} символов`;
                        setErrors(tempErrs);
                    } else {
                        setMaxLengthError(false);
                        tempErrs["maxLength"] = null;
                        setErrors(tempErrs);
                    }
                    break;
                case "mailError":
                    let regex =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (value.match(regex)) {
                        setMailError(false);
                        tempErrs["mailError"] = null;
                        setErrors(tempErrs);
                    } else {
                        setMailError(true);
                        tempErrs["mailError"] = `Некорректный формат email`;
                        setErrors(tempErrs);
                    }
                    break;
                case "minAge":
                    const msInYear = 31536000000;
                    const now = new Date();
                    const birth = new Date(Date.parse(value + "T00:00:00.000"));
                    if (now - birth > validations[validation] * msInYear) {
                        setBirthError(false);
                        tempErrs["minAge"] = null;
                        setErrors(tempErrs);
                    } else {
                        setBirthError(true);
                        tempErrs[
                            "minAge"
                        ] = `Ваш возраст должен быть больше ${validations[validation]}`;
                        setErrors(tempErrs);
                    }
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        setCorrect(
            !(
                isEmpty ||
                maxLengthError ||
                minLengthError ||
                birthError ||
                mailError
            )
        );
    }, [isEmpty, maxLengthError, minLengthError, birthError, mailError]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        mailError,
        birthError,
        errors,
        correct,
    };
};

const useInput = (initialValue, validations) => {
    let [value, setValue] = useState(initialValue);
    let [isDirty, setIsDirty] = useState(false);
    const valid = useValid(value, validations);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setIsDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    };
};

export { useInput, useValid };
