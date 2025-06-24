import React, { useState } from "react";
import "../styles/SearchBar.css";

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputKey = (event) => {
        if (event.key === 'Enter' || event.key === 'Backspace') {
            console.log('Search query:', query);
            onSearch(query);
        }
    };

    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Palabra clave..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleInputKey}
                />
            </div>
        </div>
    );
}

