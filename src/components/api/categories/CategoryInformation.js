function CategoryInformation({ category }) {
    return (
        <div className='button-beauty'>
            <h2>{category.name}</h2>
            <h2>Description: {category.description}</h2>
            <h2>Parent category: {category.parentCategoryId ? category.parentCategoryName.value : "No"}</h2>
            <h2>Status: {category.isActive ? "Active" : "Inactive"}</h2>
            <h3><p><strong>Books in the category:</strong> {category.bookCount} </p></h3>
        </div>
    );
}

export { CategoryInformation };
