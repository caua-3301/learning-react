import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundComp() {
    const [time, setTime] = useState(5);
    const navigate = useNavigate();
    const timeout = useRef();

    useEffect(() => {
        clearTimeout(timeout.current);

        setTimeout(() => {
            setTime(time - 1)
        }, 1000)

        if (time === 0) {
            navigate('/')
        }
    }, [time, navigate])

    return <div>Sorry, page not found, redirect to home in {time}</div>
}