const GraduationSchema = require('../models/GraduationSchema')

exports.GetAllGraduation = (req,res) =>{
    GraduationSchema.find()
    .then((value)=>{res.status(200).send(value)})
    .catch((err)=>{res.status(500).send(err)})
}

exports.GetGraduationbyMajor_ID = (req,res) =>{
    GraduationSchema.find({Major_ID:req.params.id})
    .then((value)=>{res.status(200).send(value)})
    .catch((err)=>{res.status(500).send(err)})
}

exports.SaveOneGraduation = (req,res) =>{
    const {
        GraduationCode,
        GraduationDescription,
        GraduationName,
        GraduationTime,
        GraduationStudentNumber,
        GraduationKey
    } = req.body
    let Graduation = new GraduationSchema({
        Major_ID:req.params.major,
        GraduationCode,
        GraduationDescription,
        GraduationName,
        GraduationTime,
        GraduationStudentNumber,
        GraduationKey
    });
    Graduation.save()
    .then((value)=> {res.status(200).send(value)})
    .catch((err)=>{res.status(500).send(err)})
}

exports.UpDateOneGraduation = (req,res) =>{
    GraduationSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((value)=> {res.status(200).send(value)})
    .catch((err)=>{res.status(500).send(err)})
}

exports.DeleteOneGraduation = (req,res) =>{
    GraduationSchema.findByIdAndDelete(req.params.id)
    .then((value)=> {res.status(200).send({msg:'Đã Xóa Rồi'})})
    .catch((err)=>{res.status(500).send(err)})
}