const express = require('express');
const path = require('path');
const fs = require('fs')
const apiRoutes = require('./routes/apiroutes')
const htmlRoutes = require('./routes/htmlroutes')


//app port and app object
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//server listen
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
