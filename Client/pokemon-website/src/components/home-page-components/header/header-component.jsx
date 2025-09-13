import React from 'react';

function Header() {

    return (
        <>
        <header className='site-header'>
            <div className='site-header-container'>
                <nav className='site-nav'>
                    <div className='nav-links'>
                        <a href="#">Home</a>
                        <a href="#">Pokédex</a>
                        <a href="#">Games</a>
                        <a href="#">Characters</a>
                    </div>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;


