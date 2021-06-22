const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({

}));

app.get('/', (req, res) => res.send('test'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));