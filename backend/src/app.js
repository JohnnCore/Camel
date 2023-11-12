const express = require('express')
const app = express()
const port = 3000

const userRouters = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());


app.use('/users', userRouters);
app.use('/products', productsRoutes);
app.use('/comments', commentsRoutes);

app.use('/', (req, res) => {
  res.send('Not Found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})