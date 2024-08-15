'use client'

import React from 'react';

interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
    return (
        <div className="sidebar-item">
            <div className="sidebar-item-icon">{icon}</div>
            <div className="sidebar-item-title">{title}</div>
        </div>
    );
};

export default SidebarItem;