let Trainee = require('../model/trainee.model');

module.exports.getTrainees = (req,res) =>{
    let trainees = Trainee.map(trainee => trainee);
    res.send(trainees);
}

module.exports.createTrainee = (req,res) =>{
    let { id,name,technology} = req.body;
    Trainee = [...Trainee,{id,name,technology}]
    res.send('Trainee is created')
}

module.exports.deleteTrainee = (req,res) => {
    let { id } = req.params;
    Trainee = Trainee.filter(trainee => trainee.id != id)
    res.send('Trainee Record is deleted')
}

module.exports.updateTrainee = (req,res) => {
    let { id } = req.params;
    let { name,technology} = req.body
    let restTrainee = Trainee.filter(trainee => trainee.id != id);
    Trainee = [...restTrainee,{id,name,technology}];
    res.send('Record is updated');
}

module.exports.getTrainee = (req,res) => {
    let { id } = req.params;
    console.log(id);
    let trainee = Trainee.filter(trainee => trainee.id == id)
    console.log(trainee)
    res.send(trainee[0]);
}
//router.put('/update/:id',TraineeController.updateTrainee)
//router.delete('/delete/:id',TraineeController.deleteTrainee)