import { useLocation } from "react-router-dom"

export default function Home() {
    const { state } = useLocation();
    console.log(state);

    return <div>This is home page</div>
}