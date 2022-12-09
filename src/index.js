const app = require('./app');

var PORT = process.env.PORT || 8800;

app.listen(PORT, () =>{
    console.log( `${PORT}`);
})