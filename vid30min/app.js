import express from "express";
// fs= FileSystem - Permite trabajar con los archivos propios del proyecto
import fs, { write } from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const writeData = (data)=>{
    try{
        fs.writeFileSync("./movies.json", JSON.stringify(data))
    }catch(error){
        console.log(error)
    }
};
const readData = ()=>{
    try{
        const data = fs.readFileSync("./movies.json");
    return (JSON.parse(data));
    }catch(error){
        console.log(error);
    }
};

readData();

app.get("/",(req,res)=>{
    res.send("Página")
});

//POST -    (C).CREATE
app.post("/movies", (req,res)=>{
    const data = readData();
    const body = req.body;
    const newMovie = {
        ...body,
        id: data.movies.length +1, 
        
    };
    data.movies.push(newMovie);
    writeData(data);
    res.json(newMovie);
});
//GET -     (R).READ
app.get("/movies", (req, res)=>{
    const data = readData();
    res.json(data.movies)
})

app.get("/movies/:id", (req,res)=>{
    const data = readData();
    const id = parseInt(req.params.id)
    const movie = data.movies.find((aMovie) => aMovie.id === id);
    res.json(movie)
})
//PUT -     (U).UPDATE
app.put("/movies/:id", (req,res)=>{
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id)
    const movieIndex = data.movies.findIndex((aMovie)=> aMovie.id ===id);
    data.movies[movieIndex]={
        ...data.movies[movieIndex],
        ...body,
    }
    writeData(data);
    res.json(data.movies[movieIndex]);
})
//DELETE -  (D).DELETE
app.delete("/movies/:id",(req,res)=>{
    const data = readData();
    const id = parseInt(req.params.id)
    const movieIndex = data.movies.findIndex((aMovie)=> aMovie.id ===id);
    data.movies.splice(movieIndex, 2); // Cuantos borra desde el index.
    writeData(data); // Escribe de nuevo la información sin lo que fue eliminado.
    res.json({message: "Book deleted successfully"});
})




app.listen(3001,()=>{
    console.log("The server is listening port 3001")
});

