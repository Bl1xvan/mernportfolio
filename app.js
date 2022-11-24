require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const projects = require('./routes/projects');
const connectDB = require('./db/connect');
const { join } = require("path");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use('/', express.static('./public'));

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({origin: true, credentials: true}))
app.use('/api/v1/projects', projects)


app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;



if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()