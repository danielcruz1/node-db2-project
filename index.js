const server = require('./server');

const port = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.send('<h2>SQLITE STUDIO AND KNEX PRACTICE</h2>')
  })

server.listen(port, () => console.log(`\n** Listening on port ${port} ***\n`));  