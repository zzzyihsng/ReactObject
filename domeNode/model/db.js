const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://2892422019:IJWUSBpKZAg8Jqpe@cluster0.cyi7fq0.mongodb.net/331")
.then(()=>{
    console.log("连接成功！")
})
.catch((error)=>{
    console.log("连接失败！",error)
})


module.exports = mongoose