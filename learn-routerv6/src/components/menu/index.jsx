import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
    return <header className="headerMenu">
        <nav>
            <Link to="./" state={'This is state from home'}>Home</Link>
            <Link to="about">About</Link>
            <Link to="post">Posts</Link>
            <Link to="redirect">Redirect</Link>
            <Link to="post/?element=100">Post</Link>
        </nav>
    </header>
}