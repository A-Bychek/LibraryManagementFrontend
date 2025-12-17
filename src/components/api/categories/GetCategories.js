import { useState } from "react";
import { CategorySearchRequest } from '../../../grpc/category_pb';
import { client } from './CategoryServiceClient';
import { CategoryInformation } from './CategoryInformation';

function GetCategories() {
    const [categories, setCategories] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [isActive, setIsActive] = useState("true");

    const onChange = (event) => {
        setIsActive(event.target.value);
    };

    const sendRequest = () => {
        const request = new CategorySearchRequest();
        if (searchTerm) request.setSearchTerm(searchTerm);
        request.setIsActive(isActive == "false" ? false : true);
        if (parentCategoryId) request.setParentCategoryId(parentCategoryId);

        client.getCategories(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't get categories list:\n${err.message}`)
            } else {
                setCategories(response.getCategoriesList().map(category => category.toObject()));
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>To search required categories, fill in the following search parameters, please:</h3>
            </div>

            <div><b>Search Term (optional):</b>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Place search term here"
                />
            </div>

            <div><b>Parent category ID (optional):</b>
                <input
                    type="int64"
                    value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}
                    placeholder="Place parent category ID here"
                />
            </div>

            <div><b>Is the category active or not?</b>
                <select value={isActive} onChange={onChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <button className='button-beauty' onClick={sendRequest}>Search</button>
            {categories ? (
                <div className='App'>
                    <h2>Categories:</h2>
                    <ul>
                        {categories.map((category, index) => (
                            <li className='flex-container' key={index}>{<CategoryInformation category={category} />}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3></h3>
            )}

        </div>
    )
}

export { GetCategories }
