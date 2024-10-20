const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));//middleware used to parse request and retrieve req.body when data is in urlencoded
app.use(express.json())//middleware to parse request when data is in json format
const TraineeRoutes = require('./src/route/trainee.route');
const port = 5000;
app.use('/trainee',TraineeRoutes);
app.listen(port,() => {
    console.log(`server is running at port ${port}`)
})