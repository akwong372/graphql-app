import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

function AddBook() {

    const [query, setQuery] = useState({
        name: '',
        genre: '',
        authorId: ''
    });

    const handleChange = e => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        })
    };

    const { loading: queryLoading, error: queryError, data: queryData } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);

    const displayAuthors = () => {
        if (queryLoading) return <option disabled>Loading...</option>;
        if (queryError) return <option diabled>Error loading authors</option>;
        return queryData.authors.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
        ));
    };

    const submitForm = e => {
        e.preventDefault();
        addBook({
            variables: {
                name: query.name,
                genre: query.genre,
                authorId: query.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    };

    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name: </label>
                <input type="text" name="name" onChange={handleChange}></input>
            </div>

            <div className="field">
                <label>Genre: </label>
                <input type="text" name="genre" onChange={handleChange}></input>
            </div>

            <div className="field">
                <label>Author: </label>
                <select name="authorId" onChange={handleChange}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default AddBook;