import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '80px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aulas">Aulas</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav