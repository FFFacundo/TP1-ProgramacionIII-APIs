import express from 'express';
import bookSchema from '../models/book.js';
import book from '../models/book.js';

const router = express.Router();

//Create new book - POST
router.post("/books", (req,res)=>{
    const book = bookSchema(req.body);
    book
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({ message: error })); 
})

// Read books - GET
    // GET ALL
router.get("/books", (req,res)=>{
    book
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({ message: error }));
})
    //GET by ID
router.get("/books/:id", (req,res)=>{
    const {id}= req.params;
    book
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({ message: error }));
})

//Update book -- PUT
router.put("/books/:id", (req,res)=>{
    const {id}= req.params;
    const {title, author, edition, order} = req.body;
    book
        .updateOne({_id: id},{$set : {title, author, edition, order}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({ message: error }));
})

//Remove book -- DELETE
router.delete("/books/:id", (req,res)=>{
    const {id}= req.params;
    book
        .deleteOne({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({ message: error }));
})

export default router;