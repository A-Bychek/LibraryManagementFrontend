import { useState } from 'react';
import { client } from './AuthorServiceClient';
import { UpdateAuthorRequest } from '../../../grpc/author_pb';
import { AuthorInformation } from './AuthorInformation'

function UpdateAuthor() {
    const [author, setAuthor] = useState(null);
    const [authorId, setAuthorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [authorActive, setAuthorActive] = useState(Boolean);
    const [error, setError] = useState();

    const onChange = (event) => {
        setAuthorActive(event.target.value);
    };

    const sendRequest = () => {
        const request = new UpdateAuthorRequest();

        request.setAuthorId(authorId);
        if (firstName) request.setFirstName(firstName);
        if (lastName) request.setLastName(lastName);
        if (biography) request.setBiography(biography);
        if (dateOfBirth) request.setDateOfBirth(dateOfBirth);
        request.setIsActive(authorActive == "true");

        client.updateAuthor(request, {}, (err, response) => {
            if (err) {
                setError(err.message);
                setAuthor(null)
            } else {
                setAuthor(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Want to update an existing author entity? Please fill in the following fields:</h3>
            </div>

            <div><b>Author ID (required):</b>
                <input
                    type="text"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    placeholder="Place Author ID here"
                />
            </div>

            <div><b>First name (optional):</b>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Place First Name here"
                />
            </div>

            <div><b>Last name (optional):</b>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Place Last Name here"
                />
            </div>

            <div><b>Biography (optional):</b>
                <input
                    type="text"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                    placeholder="Place Biography here"
                />
            </div>

            <div><b>Date of birth (optional):</b>
                <input
                    type="text"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="Place Date Of Birth here"
                />

            </div>

            <div><b>Is the author active?</b>
                <select value={authorActive} onChange={onChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <button className='button-beauty' onClick={sendRequest}>Update</button>
            {author ? (
                <div className='App'>
                    <h2>Author has been updated:</h2>
                    <AuthorInformation author={author} />
                </div>
            ) : (
                <div>
                    <h2>{error}</h2>
                </div>
            )}
        </div>
    );
}

export { UpdateAuthor };
