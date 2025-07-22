import { NavLink } from 'react-router';

export const Nav = () => {
    return (
        <nav>
            <NavLink to="/" className="logo">Seuss Treasury</NavLink>
            <ul className="navigation">
                <li>
                    <NavLink to="/">Books</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes">Quotes</NavLink>
                </li>

            </ul>
        </nav>
    );
}