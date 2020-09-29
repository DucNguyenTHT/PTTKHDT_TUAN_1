const mongoose = require('mongoose');

const SpecialtySchema = mongoose.Schema({
    SpecialtyCode :{
        type: String,
        unique:true,
    },
    LocalName:{
        type:String,
        require:true
    },
    GlobalName:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('Specialty',SpecialtySchema)