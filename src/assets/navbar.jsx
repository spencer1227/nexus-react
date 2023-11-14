import React from 'react';


const Navbar = () => {
    return (
        <div className="tabs">
            <ul>
                <ul>
                    <a href="/aboutme"></a>
                </ul>
                <ul>
                    <a href="/resume"></a>
                </ul>
                <ul>
                    <a href="/contact"></a>
                </ul>
                <ul>
                    <a href="/portfolio"></a>
                </ul>
            </ul>
        </div>
    );
};

export default Navbar;