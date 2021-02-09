const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/noderest', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(res => console.log("Banco de dados conectado"))
.catch(err => console.log("Error:", err));


mongoose.Promise = global.Promise;

module.exports = mongoose;