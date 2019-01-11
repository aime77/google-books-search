const axios = require ("axios");
const router=require ("express").Router();
const KEY = "AIzaSyBBwjCHsmzGrm91i0Rnc0DvQKuMZUX7qU0";

router.get("/books", (request, response)=>{
    axios.get("https://www.googleapis.com/auth/books", {params:request.query})
    .then(({data:{results}})=>response.json(results))
    .catch(err=>response.status(422).json(err));
})


router.get("/api/books", (request, response)=>{



})

router.delete("/api/books/:id", (request, response)=>{


    
})

router.post("/api/books", (request, response)=>{


    
})

module.exports=router;