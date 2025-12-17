import { useState } from 'react';
import { client } from './CategoryServiceClient';
import { CreateCategoryRequest } from '../../../grpc/category_pb';
import { CategoryInformation } from './CategoryInformation'

function CreateCategory() {
    const [category, setCategory] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [sortOrder, setSortOrder] = useState(1);

    const onChange = (event) => {
        setSortOrder(event.target.value);
    };
    const sendRequest = () => {
        const request = new CreateCategoryRequest();

        request.setName(name);
        request.setDescription(description);
        request.setParentCategoryId(parentCategoryId);
        request.setSortOrder(Number(sortOrder));
        client.createCategory(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't create a category:\n${err.message}`)
            } else {
                setCategory(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Let's create a new category. Please fill in the following fields:</h3>
            </div>

            <div>Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Place name here"
                />
            </div>

            <div>Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Place description here"
                />
            </div>

            <div>Parent category ID (if exists):
                <input
                    type="int64"
                    value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}
                    placeholder="Place parent category ID here"
                />
            </div>

            <div><b>Sort order(optional)</b>
                <select value={sortOrder} onChange={onChange}>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
            </div>

            <button className='button-beauty' onClick={sendRequest}>Create</button>
            {category ? (
                <div className='App'>
                    <div><h2>Category has been created:</h2></div>
                    <div><CategoryInformation category={category} /></div>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    );
}

export { CreateCategory };
