import React from 'react';
import {Link} from "react-router-dom";
const Menu = () => (
    <nav>
        <Link to="about">[About]</Link>
        <Link to="events">[Events]</Link>
        <Link to="products">[Products]</Link>
        <Link to="contact">[Contact Us]</Link>
    </nav>
)

export const PageTemplate = ({ children }) => (
    <div>
        <Menu />
        {children}
    </div>
)