'use client'
import { useState } from 'react';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    // 사이드 바의 상태를 토글하는 함수
    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
    );
};

export default Sidebar;
