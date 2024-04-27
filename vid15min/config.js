const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/peliculasTP1P3")
        .then(() => {
            console.log('Conectado a Pelis');
        })
        .catch((err) => {
            console.log(err);
        });
    }
module.exports = dbconnect;

/*
const dbconnect = ()=>{
    mongoose.connect("mongodb://localhost:27017/peliculasTP1P3",{}, (err, res)=>{
        if(!err){
            console.log("Todo Messi");
        }else{
            console.log("Probá de nuevo");
        }
    })
}
*/


