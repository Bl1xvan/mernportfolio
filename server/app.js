require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const cors = require("cors");
const projects = require('./routes/projects');
const connectDB = require('./db/connect');
const { join } = require("path");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors)
app.use('/', express.static('./public'));

app.use(express.json())
app.use('/api/v1/projects', projects)
app.use('/api', authRoutes);

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;



app.use('/', express.static(join('client', 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.join("client", "build", "index.html"));
  });


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()