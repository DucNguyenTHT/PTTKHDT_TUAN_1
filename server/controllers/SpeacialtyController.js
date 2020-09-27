const SpecialtySchema = require('../models/SpecialtySchema')

exports.GetAllSpeacialty = (req,res) =>{
    SpecialtySchema.find()
    .then((Specialty)=>{
        res.status(200).send(Specialty)
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message
        });
    })
}

exports.SaveOneSpeacialty = (req,res) =>{
    const {SpecialtyCode,LocalName,GlobalName} = req.body;
    const specialty = new SpecialtySchema({
        SpecialtyCode,
        LocalName,
        GlobalName
    })

    specialty.save()
    .then((data) =>  res.send(data))
    .catch((err) => {
        res.status(500).send({
            message : err.message
        })
    })
}

exports.UpdateOneSpeacialty = (req,res) =>{
    SpecialtySchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((Specialty)=> {
        if(!Specialty) {
            return res.status(404).send({
                message : 'Specialty not found'
            })
        }
        res.status(200).send(Specialty)
    })
    .catch((err)=>{
        res.status(500).send({
           message:err.message
        })
    })
}

exports.DeleteOneSpeacialty = (req,res) =>{
    SpecialtySchema.findByIdAndRemove(req.params.id)
    .then((Specialty)=>{
        if(!Specialty) {
            return res.status(404).send({
                message : 'Specialty not found'
            })
        }
        res.send('Specialty deleted')
    })
    .catch((err)=>{
        res.status(500).send({
           message:err.message
        })
    })
}