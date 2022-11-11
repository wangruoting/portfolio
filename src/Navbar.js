import "./style.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <CustomLink to="/project">Projects</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}