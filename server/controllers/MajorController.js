const express = require('express');
const { findById } = require('../models/MajorSchema');
const MajorSchema = require('../models/MajorSchema');

exports.GetmajorOfSpeacialty = (req,res) => {
    MajorSchema.find({ Specialty_id : req.params.Specialid})
    .then((major)=> {
        res.status(200).send(major);
    })
    .catch((err)=>{
        res.status(500).send({message:err.message});
    })
} 

exports.SaveAmajorOfSpeacialty = (req,res) => {
    const {
        MajorCode,
        MajorName,
        MajorLocalName,
        MajorGlobalName,
        decription
    } = req.body
    const Major = new MajorSchema({
        Specialty_id : req.params.Specialid,
        MajorCode,
        MajorName,
        MajorLocalName,
        MajorGlobalName,
        decription
    })

    Major.save()
    .then((major) =>{
        res.send(major)
    })
    .catch((err) => {
        res.status(500).send({message:err.message})
    })
} 

exports.UpdateAmajorOfSpeacialty = (req,res) => {
    MajorSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((major)=>{
        if(!major) {
            return res.status(404).send({
                message : 'Major not found'
            })
        }
        res.status(200).send(major)
    }
    
    )
    .catch((err)=>[
        res.status(500).send({message:err.message})
    ])
} 

exports.DeleteAmajorOfSpeacialty = (req,res) => {
    MajorSchema.findByIdAndDelete(req.params.id)
    .then((Major)=>{
        if(!Major){
            return res.status(404).send({
                message : 'Major not found'
            })
        }
        return res.status(200).send({
            message : 'Major deleted'
        })
    })
    .catch((err)=>{
        res.status(500).send({message:err.message})
    })
} 