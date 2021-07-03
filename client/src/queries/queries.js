import { gql } from '@apollo/client';

const getBooksQuery = gql`
query GetBooks{
    books {
        name
        id
    }
}
`;

const getAuthorsQuery = gql`
query GetAuthors{
    authors {
        name
        id
    }
}
`;

const addBookMutation = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        genre
        id
    }
}
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation };