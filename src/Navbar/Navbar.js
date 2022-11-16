import "./navbar.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (<nav className="nav">
        <Link to="/" className="site-title">My Little Things</Link>
        <ul>
            <CustomLink to="/project">Projects</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
        </ul>
        <div className="linkedin-logo"><a href="https://www.linkedin.com/in/ruoting-wang-22ba851b1/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></div>
    </nav>);
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