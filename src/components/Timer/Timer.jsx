import { useState, useEffect } from "react";

export default function Timer({ seconds, callback }) {
    const [sec, setSec] = useState(seconds);
    const [enabled, setEnabled] = useState(true);
    useEffect(() => {
        if (!enabled) return;
        const interval = setInterval(() => {
            setSec((sec) => sec - 1);
        }, 1000);
        return () => {
            console.log("return");
            clearInterval(interval);
        };
    }, [enabled]);

    useEffect(() => {
        console.log(sec);
        if (sec === 0) {
            setEnabled(false);
            callback();
        }
    }, [sec]);

    return (
        <span>
            {Math.floor(sec / 60)}:{sec < 10 ? "0" + sec : sec}
        </span>
    );
}
