const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000 ;
const cors = require('cors')
const connectDB   = require('./config/db');

app.use(cors());
app.use(express.json({}));

connectDB();
//middleware route
app.use('/api/major',require('./routes/Major'))
app.use('/api/speacialty',require('./routes/Speacialty'))


app.listen(PORT,()=>{console.log(`Server is running on : http://localhost:${PORT}`)})