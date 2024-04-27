import mongoose from 'mongoose';
const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    edition:{
        type: String,
        required: true
    },
    order:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Book', bookSchema);