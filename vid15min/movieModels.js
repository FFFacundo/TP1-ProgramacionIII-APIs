const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema(
    {
        title:{
            type: String
        },
        director:{
            type:String
        },
        duration:{
            type:String
        }
    },
    {
        timestamps:true,
        versionKey: false,
    })

const ModelMovie = mongoose.model("Pelis", movieSchema);
module.exports = ModelMovie;