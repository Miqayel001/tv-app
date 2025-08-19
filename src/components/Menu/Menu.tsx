import React, { useState } from 'react';
import './Menu.css';
import Avatar from 'antd/es/avatar/Avatar';

const menuItems = [
    { icon: 'Search.png', label: 'Search' },
    { icon: 'Group46.png', label: 'Home' },
    { icon: 'Group56.png', label: 'TV Shows' },
    { icon: 'Group54.png', label: 'Movies' },
    { icon: 'Group53.png', label: 'Genres' },
    { icon: 'Group47.png', label: 'Watch Later' },
];

const bottomItems = [
    { label: 'Language' },
    { label: 'Get Help' },
    { label: 'Exit' },
];

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`menu-container ${isOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >


            <div className="menu-top">
                {isOpen && (
                    <div className="avatar-container">
                        <Avatar src={"/assets/Avatar.png"} size={48} />
                        <span className="label">Daniel</span>
                    </div>
                )}

                {menuItems.map((item) => (
                    <div key={item.label} className="menu-item">
                        <img
                            src={`/assets/icons/${item.icon}`}
                            alt={item.label}
                            className="menu-icon"
                        />
                        {isOpen && <span className="label">{item.label}</span>}
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="menu-bottom">
                    {bottomItems.map((item) => (
                        <div key={item.label} className="menu-item">
                            <span className="label">{item.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
