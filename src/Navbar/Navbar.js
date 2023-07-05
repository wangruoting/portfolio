import "./navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';
// import { useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar(props) {

    const { handleClick } = props;

    return (<nav className="nav">
        <Link to="/" className="site-title"><img src="../Wavy Buddies - Avatar.png" style={{ height: "55px", width: 'auto' }}></img></Link>
        <ul>

            {/* <CustomLink to="/about">About</CustomLink> */}
            {/* <CustomLink to="/contact" >Contact</CustomLink> */}

            <li className={"active"} onClick={handleClick}>
                Contact
            </li>
        </ul>
    </nav>);
}

// route to specific path
// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname })
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
// }