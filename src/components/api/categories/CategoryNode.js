import { useState } from 'react';

const CategoryNode = ({ category, onSelect, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = category.subCategoriesList;

    return (
        <div style={{ marginLeft: `${level * 30}px`, marginBottom: '5px' }}>
            <div
                style={{
                    marginBottom: '10px',
                    cursor: 'pointer'
                }}
                onClick={() => onSelect(category)}
            >
                {hasChildren.length != 0 && (
                    <button
                        onClick={(e) => {
                            setIsExpanded(!isExpanded);
                        }}
                        style={{
                            marginRight: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        {isExpanded ? '−' : '+'}
                    </button>
                )}
                <strong>{category.name}</strong>
            </div>

            {hasChildren && isExpanded && (
                <div>
                    {hasChildren.map(child => (
                        <CategoryNode
                            key={child.categoryId}
                            category={child}
                            onSelect={onSelect}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export { CategoryNode }
