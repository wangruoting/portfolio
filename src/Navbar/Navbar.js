import "./navbar.css";
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (<nav className="nav">
        <Link to="/" className="site-title"><img src="../Wavy Buddies - Avatar.png" style={{ height: "55px", width: 'auto' }}></img></Link>
        <ul>
            {/* <CustomLink to="/about">About</CustomLink> */}

            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
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