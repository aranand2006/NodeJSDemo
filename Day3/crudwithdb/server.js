const express = require('express');
const app = express();
const dotenv = require('dotenv')
const db = require('./src/config/dbconfig')
//const UserRoutes = require('./src/route/user.route')
const appRoutes = require("./src/route")
dotenv.config();

app.use(express.urlencoded({extended:true}));
//const TraineeRoutes = require('./src/route/trainee.route');
//app.use('/trainee',TraineeRoutes);
//app.use('/user',UserRoutes);
app.use(appRoutes);

db.MongoConnect();
const port = process.env.PORT || 5000
console.log('process.env.PORT',process.env.PORT);
app.listen(10000,() => {
    console.log(`server is running at port ${port}`)
})