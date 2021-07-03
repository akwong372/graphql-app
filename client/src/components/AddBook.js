import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getAuthorsQuery } from '../queries/queries';

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

    const { loading, error, data } = useQuery(getAuthorsQuery);

    const displayAuthors = () => {
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option diabled>Error loading authors</option>;
        return data.authors.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
        ));
    };

    const submitForm = e => {
        e.preventDefault();
        console.log(query)
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