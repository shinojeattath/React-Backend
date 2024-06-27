// import

var express = require('express');
require("./connection")
const user = require("./model/user")

// initialization

var app = express();

// middleware

app.use(express.json())



// api
    app.get('/', (req,res) => {
        res.send("Hello World")
    
    })

    // app.get('/login', (req,res) => {
    //     res.send("You have Successfully Logged In")
    // })

// add data to db

app.post('/login',async(req,res) => {
    try {
        console.log(req.body);
        await user(req.body).save();
        res.send({message:"Data added successfully"})

    } catch (error) {
        console.log(error);
        res.send({message:"Error occured"})   
    }
})

// get data from db

app.get('/login',async(req,res) => {
    try {
        
        const data = await user.find();
        res.send(data)
        console.log("Data shown")
        
    } catch (error) {
        console.log(error);
        res.send({message:"Error occured"})
        
    }
})

//Delete From Database

app.delete('/Login/:id', async(req,res) => {
    try {
        console.log(req.params.id)
        await user.findByIdAndDelete(req.params.id)
        res.send({message:"Data Deleted"})
    } catch (error) {
        console.log("Not Deleted")
    }
})

// Update Data

app.put('/Login/:id', async(req,res) => {
    try {
        var data = await user.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:"Data Updated"})
        
    } catch (error) {
        console.log("Data not Updated", data)
        
    }
})

// port

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})