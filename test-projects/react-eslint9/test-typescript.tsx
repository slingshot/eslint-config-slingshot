import type { FC, ReactNode } from 'react';
import React, { useState, useCallback } from 'react';

interface Item {
    id: string;
    name: string;
    category: string;
    price?: number;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

interface Props {
    items: Item[];
    title?: string;
    onItemAdd?: (item: Omit<Item, 'id'>) => void;
}

const TypeScriptTestComponent: FC<Props> = ({
    items,
    title = 'TypeScript Test Component',
    onItemAdd,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState<Omit<Item, 'id'>>({
        name: '',
        category: '',
        price: undefined,
    });

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setNewItem({ name: '', category: '', price: undefined });
    }, []);

    const handleInputChange = useCallback((field: keyof Omit<Item, 'id'>) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;

            setNewItem((prev) => ({
                ...prev,
                [field]: field === 'price' ? (value ? parseFloat(value) : undefined) : value,
            }));
        };
    }, []);

    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();

        if (!newItem.name.trim() || !newItem.category.trim()) {
            return;
        }

        if (onItemAdd) {
            onItemAdd(newItem);
        }

        handleCloseModal();
    }, [newItem, onItemAdd, handleCloseModal]);

    const groupedItems = items.reduce<Record<string, Item[]>>((acc, item) => {
        const { category } = item;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    return (
        <div className="typescript-test-component">
            <header>
                <h1>{title}</h1>
                <button
                    type="button"
                    onClick={handleOpenModal}
                    className="add-item-button"
                >
                    Add New Item
                </button>
            </header>

            <main>
                {Object.entries(groupedItems).map(([category, categoryItems]) => (
                    <section key={category} className="category-section">
                        <h2>{category}</h2>
                        <div className="items-grid">
                            {categoryItems.map((item) => (
                                <article key={item.id} className="item-card">
                                    <h3>{item.name}</h3>
                                    {item.price && (
                                        <p className="price">${item.price.toFixed(2)}</p>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>
                ))}

                {items.length === 0 && (
                    <p className="empty-state">No items to display. Add some items!</p>
                )}
            </main>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <form onSubmit={handleSubmit} className="add-item-form">
                    <h2>Add New Item</h2>

                    <div className="form-group">
                        <label htmlFor="item-name">Name:</label>
                        <input
                            id="item-name"
                            type="text"
                            value={newItem.name}
                            onChange={handleInputChange('name')}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="item-category">Category:</label>
                        <input
                            id="item-category"
                            type="text"
                            value={newItem.category}
                            onChange={handleInputChange('category')}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="item-price">Price (optional):</label>
                        <input
                            id="item-price"
                            type="number"
                            step="0.01"
                            min="0"
                            value={newItem.price ?? ''}
                            onChange={handleInputChange('price')}
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-button">
                            Add Item
                        </button>
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default TypeScriptTestComponent;
