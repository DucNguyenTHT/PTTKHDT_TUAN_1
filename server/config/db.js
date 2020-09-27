const mongoose = require('mongoose')
const config   = require('config')

const connectDB = async () =>{
    try {
        const DB = await mongoose.connect(config.get('MongoURI'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify:false,
        })
        if(!DB) {
            console.log('server error')
        }
        console.log('ServerConnected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB