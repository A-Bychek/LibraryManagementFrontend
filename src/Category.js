import { UseDocumentTitle } from './components/common/UseDocumentTitle';
import { CreateCategory } from './components/api/categories/CreateCategory';
import { GetCategories } from './components/api/categories/GetCategories';
import { GetCategoryTree } from './components/api/categories/GetCategoryTree';

function CreateNewCategory() {
    UseDocumentTitle("Create category")
    return <CreateCategory />
}

function SearchCategories() {
    UseDocumentTitle("Search categories")
    return <GetCategories />
}

function GetExistingCategoryTree() {
    UseDocumentTitle("Get category tree")
    return <GetCategoryTree />
}

export {
    CreateNewCategory, SearchCategories, GetExistingCategoryTree
}
