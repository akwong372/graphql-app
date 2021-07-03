import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {

    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading book details</p>;

    return (
        <div id="book-details" className="book-details">

            {data.book ?
                <ul>
                    <li>ID: {data.book.id}</li>
                    <li>Title: {data.book.name}</li>
                    <li>Genre: {data.book.genre}</li>
                    <li>Author: {data.book.author.name}</li>
                    <ul>
                        <li>ID: {data.book.author.id}</li>
                        <li>Age: {data.book.author.age}</li>
                        <li>Other Books: </li>
                        <ul>
                            {data.book.author.books.map(({name, id})=>(
                                <li key={id}>"{name}" ID: {id}</li>
                            ))}
                        </ul>
                    </ul>
                </ul>
                :
                <p>Select a book to view details</p>}

        </div>
    );
}

export default BookDetails;
