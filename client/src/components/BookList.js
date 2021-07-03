import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);
    const [ selected, setSelected ] = useState(null);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>Error loading books</p>;

    return (
        <div>
            <ul id="book-list">
                {data.books.map(({ name, id }) => (
                    <li key={id} onClick={e => setSelected(id)}>{name}</li>
                ))}
            </ul>
            <BookDetails bookId={selected} />
        </div>
    );
}

export default BookList;
