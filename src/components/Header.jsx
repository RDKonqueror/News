import React, { useEffect, useState } from 'react';
import { PersonFill, Search } from 'react-bootstrap-icons';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setBg(window.pageYOffset > 50)
            );
        }
    }, []);
    
    return (
        <header className={bg ? "bg-white" : ""}>
            <div>
                <h2 className="logo">NEWS</h2>
                <input type="search" name="search" placeholder="Search country, state, city, topic" />
                <Search style={{ color: "#c60000", marginLeft: "-30px", cursor: "pointer" }} />
            </div>
            <a href="#user"><PersonFill /></a>
        </header>
    )
};

export default Header;