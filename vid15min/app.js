//const { request } = require('express');
const express = require('express');
const dbconnect = require('./config');
const ModelMovie = require('./movieModels');

dbconnect();
const app = express();
const router = express.Router();


//CRUD
//Create -----  .post
router.post("/", async (req,res)=>{
    const body= req.body;
    const respuesta = await ModelMovie.create(body)
    res.send(respuesta)

})
//Read ----- .get

    //Get ALL
router.get("/", async (req, res)=>{
    const respuesta = await ModelMovie.find({})
    res.send(respuesta)
})
    //Get By ID
router.get("/:id", async (req, res)=>{
    const id=req.params.id
    const respuesta = await ModelMovie.findById(id)
    res.send(respuesta)
})
//Update ----- .put
router.put("/:id", async (req, res)=>{
    const body=req.body
    const id=req.params.id
    const respuesta = await ModelMovie.findOneAndUpdate({_id:id}, body)
    res.send(respuesta)
})
//Delete ----- .delete
router.delete("/:id", async (req, res)=>{
    const id=req.params.id
    const respuesta = await ModelMovie.findOneAndDelete({_id: id})
    res.send(respuesta)
})
//FIN CRUD


app.use(express.json())
app.use(router)
app.listen(3000, () =>{
    console.log("Escuchando el puerto 3000.")
})