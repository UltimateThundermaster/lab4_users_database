const express = require("express")
const mongoose = require('mongoose')
const User = require("./User")
const app = express()

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ThunderMaster:usstabnyc@cluster0.phfivi1.mongodb.net/lab4?retryWrites=true&w=majority", function(err) {
    if(err) {
        console.log(err)
        return
    }
    console.log("Connected successfully to mongodb");
  });

app.use(express.json())

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({user})        
    }catch(err) {
        res.status(500).json({err: err.message})
    }
})

const port = 3000
app.listen(port, () => console.log(`Server is up at port ${port}`))
