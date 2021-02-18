const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const morgan = require('morgan');
const toJson = require('@meanie/mongoose-to-json');

//routes
const authRoutes = require('./routes/authRoutes');

//app config
const app = express();

// env
require('dotenv/config');

//middlewares
const verifyToken = require('./middlewares/verifyToken');
app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan('tiny'));
mongoose.plugin(toJson);

//api routes
app.get('/', verifyToken, (request, response) => {
    response.status(200).send('Response from the server!')
});

app.use('/user', authRoutes);

//listen commands
app.listen(process.env.PORT, ()=> console.log('server is up and running on port 3000'));
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, ()=> console.log('Database connected successfully'))