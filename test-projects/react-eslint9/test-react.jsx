import React, { useState, useCallback, useMemo } from 'react';

const ReactTestComponent = ({ items, onItemSelect }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [filter, setFilter] = useState('');

    const filteredItems = useMemo(() => {
        if (!filter) return items;
        return items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
    }, [items, filter]);

    const handleItemClick = useCallback((item) => {
        setSelectedId(item.id);
        if (onItemSelect) {
            onItemSelect(item);
        }
    }, [onItemSelect]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="react-test-component">
            <h2>React ESLint 9 Test Component</h2>

            <div className="filter-section">
                <label htmlFor="item-filter">Filter items:</label>
                <input
                    id="item-filter"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Type to filter..."
                />
            </div>

            <ul className="item-list">
                {filteredItems.map((item) => (
                    <li key={item.id} className={selectedId === item.id ? 'selected' : ''}>
                        <button
                            type="button"
                            onClick={() => handleItemClick(item)}
                            className="item-button"
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            {selectedId && (
                <div className="selection-info">
                    Selected: {filteredItems.find((item) => item.id === selectedId)?.name}
                </div>
            )}
        </div>
    );
};

ReactTestComponent.propTypes = {
    items: 'array',
    onItemSelect: 'function',
};

ReactTestComponent.defaultProps = {
    items: [],
    onItemSelect: null,
};

export default ReactTestComponent;
