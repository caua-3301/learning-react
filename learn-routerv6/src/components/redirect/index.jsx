import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Redirect() {
    const [time, setTime] = useState(5);
    const navigate = useNavigate();
    const timeout = useRef();

    useEffect(() => {
        clearTimeout(timeout.current);

        setTimeout(() => {
            setTime(time - 1)
        }, 1000)

        if (time === 0) {
            navigate('/', {
                state: `This is state: ${Math.random()}`
            })
        }
    }, [time, navigate])

    return <div>
        <div>Page that you he was redirect is here!</div>
        <div>Get out in {time}</div>
    </div>
}