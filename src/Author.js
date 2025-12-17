import { UseDocumentTitle } from './components/common/UseDocumentTitle';
import { CreateAuthor } from './components/api/authors/CreateAuthor';
import { GetAuthor } from './components/api/authors/GetAuthor';
import { UpdateAuthor } from './components/api/authors/UpdateAuthor';
import { DeleteAuthor } from './components/api/authors/DeleteAuthor';
import { GetAuthors } from './components/api/authors/GetAuthors';

function GetAuthorInformation() {
    UseDocumentTitle("Author information")
    return <GetAuthor />
}

function CreateNewAuthor() {
    UseDocumentTitle("Create author")
    return <CreateAuthor />
}

function UpdateExistingAuthor() {
    UseDocumentTitle("Update author")
    return <UpdateAuthor />
}

function DeleteExistingAuthor() {
    UseDocumentTitle("Delete author")
    return <DeleteAuthor />
}

function SearchAuthors() {
    UseDocumentTitle("Search authors")
    return <GetAuthors />
}

export {
    GetAuthorInformation, CreateNewAuthor, UpdateExistingAuthor,
    DeleteExistingAuthor, SearchAuthors
};
