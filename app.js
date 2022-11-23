const express = require('express');
const app = express();
const projects = require('./routes/projects');
const connectDB = require('./db/connect');
require('dotenv').config();
const { join } = require("path");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use('/', express.static('./public'));
app.use(express.json())
app.use('/api/v1/projects', projects)
app.use('/', express.static(join(__dirname, 'client', 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()