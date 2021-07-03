import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {

    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        }
    });

    if (loading) return <p>Loading book details...</p>;
    if (error) return <p>Error loading book details</p>;

    return (
        <div id="book-details" className="book-details">

            {data.book ?
                <div>
                    <h2>{data.book.name}</h2>
                    <p>Genre: {data.book.genre}</p>
                    <p>Author: {data.book.author.name}</p>
                    <ul>
                        <li>Age: {data.book.author.age}</li>
                        <li>Other Books: </li>
                        <ul className="other-books">
                            {data.book.author.books.map(({ name, id }) => (
                                <li key={id}>"{name}"</li>
                            ))}
                        </ul>
                    </ul>
                </div>

                :
                <p>Select a book to view details</p>}

        </div>
    );
}

export default BookDetails;
