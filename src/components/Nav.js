import React from "react";

function Nav() {
    return (
        <header style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '80px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/aulas">Aulas</a>
                    </li>
                    <li>
                        <a href="/sobre">Sobre</a>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav