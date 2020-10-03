const mongoose = require('mongoose');

const GraduationSchema = mongoose.Schema({
    Major_ID : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Major'
    },
    GraduationCode : {
        type : String,
        unique:true
    },
    GraduationName : {
        type : String
    },
    GraduationTime : {
        type : Number
    },
    GraduationStudentNumber : {
        type : Number
    },
    GraduationKey : {
        type : String
    }
})

module.exports = mongoose.model('Graduation',GraduationSchema)