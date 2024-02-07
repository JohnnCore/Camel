const express = require('express')
const app = express()
const passport = require('passport');
const strategy = require('./middleware/checkToken')

const port = 3000



const userRouters = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const purchasesRoutes = require('./routes/purchasesRoutes');
const purchasesProductRoutes = require('./routes/purchaseProductRoutes');

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

// //Middleware
app.use(express.json());
passport.use(strategy);
app.use(passport.initialize());

// app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouters);
app.use('/products', passport.authenticate('jwt', {session: false}),productsRoutes);
app.use('/comments', commentsRoutes);
app.use('/purchases', purchasesRoutes);
app.use('/purchasesproduct', purchasesProductRoutes);

app.use('/', (req, res) => {
  res.send('Not Found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})