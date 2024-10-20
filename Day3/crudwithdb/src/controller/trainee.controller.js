let Trainee = require('../model/trainee.model');

module.exports.getTrainees = async (req,res) =>{
    try{
        let trainees = await Trainee.find();
        res.send({suceess:true,data:trainees})
    }
    catch(error){
        res.send({success:false,data:error.message});
    }
}

module.exports.createTrainee = async (req,res) =>{
    try{
        let { name,degree } = req.body
        let trainee = new Trainee({name,degree});
        let createdTrainee = await trainee.save();
        res.send({success:true,data:createdTrainee})
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}
module.exports.deleteTrainee = async(req,res) =>{
    try{
        let { id} = req.params;
        let trainee = await Trainee.findOne({_id:id});
        if(!trainee){
            res.send({success:false,data:"trainee does not exist"})
        } else{
            await Trainee.findOneAndDelete({_id:id});
            res.send({suceess:true,data:'Trainee Record is deleted'})
        }
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}
module.exports.updateTrainee = async(req,res) => {
    try{
        let { id} = req.params;
        let trainee = await Trainee.findOne({_id:id});
        if(!trainee){
            res.send({success:false,data:"trainee does not exist"})
        } else{
            let { name,degree} = req.body;
            
            await Trainee.findOneAndUpdate({_id:id},{name,degree})
            res.send({success:true,data:'trainee record is updated'})
        }
    }
    catch(error){
        res.send({success:false,data:error.message})
    }
}