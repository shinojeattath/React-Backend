// import
 
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://shinojeattath:uUrukl6WL5Z42JQi@cluster0.qox2xcx.mongodb.net/SampleDatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('DB Connected')
})
.catch((error) => {
    console.log(error)
    console.log('DB Connection Failed')
})
// initialization

