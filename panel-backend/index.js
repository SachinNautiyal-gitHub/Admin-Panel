const connectToMongo = require('./DB');
const express = require('express')
var cors = require('cors')



connectToMongo();

const app = express()
const port = 5000

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

//  Available routes

app.use('/api/auth/' , require('./routes/auth'));
app.use('/api/data/' , require('./routes/data'));



app.listen(port, () => {
  console.log(` Inootbook listening on port ${port}`)
})

