var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bandia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('Ya esta conectado'))
.catch((err) => console.error(err));
