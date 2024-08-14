'use client'
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            {/* Add your sidebar content here */}
        </div>
    );
};

export default Sidebar;
