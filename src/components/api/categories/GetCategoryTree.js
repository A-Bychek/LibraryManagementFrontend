import { useState, useEffect } from 'react';
import { CategoryNode } from './CategoryNode'
import { CategoryTreeRequest } from '../../../grpc/category_pb';
import { client } from './CategoryServiceClient';

function hasChildren(category) {
    if (category.toObject().parentCategoryId == 0) return true
    return false
}

const GetCategoryTree = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => sendRequest(), categories)

    const sendRequest = () => {
        const request = new CategoryTreeRequest();
        request.setIncludeInactive(true)

        client.getCategoryTree(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't get category tree:\n${err.message}`)
            } else {
                setCategories(response.getCategoriesList());

            }
        });
    }

    const handleSelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <h1 className='App'>Category Tree</h1>
            {categories.filter(hasChildren).map(category => (
                <CategoryNode
                    key={category.toObject().categoryId}
                    category={category.toObject()}
                    onSelect={handleSelect}
                />
            ))}

            {selectedCategory && (
                <div style={{ marginTop: '10px' }}>
                    <h3>Selected Category</h3>
                    <p><strong>ID: </strong>{selectedCategory.categoryId}</p>
                    <p><strong>Name: </strong>{selectedCategory.name}</p>
                </div>
            )}
        </div>
    );
};

export { GetCategoryTree }
