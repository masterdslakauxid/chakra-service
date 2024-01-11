const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv/config");

const enqRoute = require('./routes/enquiries');

app.use(bodyParser.json());
app.use(cors());
app.use('/enquiries', enqRoute);



//Routes


mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected Successfully' + res))
    .catch((err) => { console.error(err); });

//Listen
app.listen(4000);