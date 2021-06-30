import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';

function AddBook() {

    const { loading, error, data } = useQuery(getAuthorsQuery);

    const displayAuthors = () => {
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option diabled>Error loading authors</option>;
        return data.authors.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
        ));
    }

    return (
        <form>
            <div className="field">
                <label>Book name: </label>
                <input type="text"></input>
            </div>

            <div className="field">
                <label>Genre: </label>
                <input type="text"></input>
            </div>

            <div className="field">
                <label>Author: </label>
                <select>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default AddBook;