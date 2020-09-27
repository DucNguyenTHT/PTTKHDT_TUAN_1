const mongoose = require('mongoose');

const MajorSchema = mongoose.Schema({
    Specialty_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Specialtys'
    },
    MajorCode : {
        type : String,
        require:true,
    },
    MajorName : {
        type : String,
        require:true,
    },
    MajorGlobalName : {
        type : String,
        require:true,
    },
    date : {
        type : Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Major',MajorSchema)