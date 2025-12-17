import { useState } from "react";
import { AuthorSearchRequest } from '../../../grpc/author_pb';
import { client } from './AuthorServiceClient';
import { AuthorInformation } from './AuthorInformation';

function GetAuthors() {
    const [authors, setAuthors] = useState('')
    const [searchTerm, setSearchTerm] = useState('');
    const [authorActive, setAuthorActive] = useState(true);
    const [pageNumber, setPageNumber] = useState('');
    const [pageSize, setPageSize] = useState('');

    const onChange = (event) => {
        setAuthorActive(event.target.value);
    };

    const sendRequest = () => {
        const request = new AuthorSearchRequest();
        if (searchTerm) request.setSearchTerm(searchTerm);
        request.setIsActive(authorActive == "false" ? false : true);
        if (pageNumber) request.setPageNumber(Number(pageNumber));
        if (pageSize) request.setPageSize(Number(pageSize));
        client.getAuthors(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't get authors:\n${err.message}`)
            } else {
                setAuthors(response.getAuthorsList().map(author => author.toObject()));
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Please, fill in the following search parameters:</h3>
            </div>

            <div><b>Search Term (optional):</b>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Place search term here"
                />
            </div>

            <div><b>Is the author active or not?</b>
                <select value={authorActive} onChange={onChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div><b>Page number (optional):</b>
                <input
                    type="int32"
                    value={pageNumber}
                    onChange={(e) => setPageNumber(e.target.value)}
                    placeholder="Place page number here"
                />
            </div>

            <div><b>Page size (optional):</b>
                <input
                    type="int32"
                    value={pageSize}
                    onChange={(e) => setPageSize(e.target.value)}
                    placeholder="Place page size here"
                />
            </div>

            <button className='button-beauty' onClick={sendRequest}>Search</button>
            {authors ? (
                <div className='App'>
                    <h2>Authors:</h2>
                    <ul>
                        {authors.map((author, index) => (
                            <li className='flex-container' key={index}>{<AuthorInformation author={author} />}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3></h3>
            )}

        </div>
    )
}

export { GetAuthors };
