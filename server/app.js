const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
    schema
}));

app.get('/', (req, res) => res.send('test'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));