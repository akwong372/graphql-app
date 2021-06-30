import {
    gql,
    useQuery
} from '@apollo/client';

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`


function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(data)

    return (
        <div>
            <ul id="book-list">
                {data.books.map(({ name, id }) => (
                    <li key={id}>{name} id:{id}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
