import { useState } from 'react';
import { client } from './AuthorServiceClient';
import { CreateAuthorRequest } from '../../../grpc/author_pb';
import { AuthorInformation } from './AuthorInformation'

function CreateAuthor() {
    const [author, setAuthor] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const sendRequest = () => {
        const request = new CreateAuthorRequest();

        request.setFirstName(firstName);
        request.setLastName(lastName);
        request.setBiography(biography);
        request.setDateOfBirth(dateOfBirth);

        client.createAuthor(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't create an author:\n${err.message}`)
            } else {
                setAuthor(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Let's create a new author entity. Please fill in the following fields:</h3>
            </div>

            <div>First name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Place First Name here"
                />
            </div>

            <div>Last name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Place Last Name here"
                />
            </div>

            <div>Biography:
                <input
                    type="text"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                    placeholder="Place Biography here"
                />
            </div>

            <div>Date of birth:
                <input
                    type="text"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="Place Date Of Birth here"
                />

            </div>

            <button className='button-beauty' onClick={sendRequest}>Create</button>
            {author ? (
                <div className='App'>
                    <div><h2>Author has been created:</h2></div>
                    <div><AuthorInformation author={author} /></div>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    );
}

export { CreateAuthor };
