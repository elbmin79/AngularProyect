const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    id:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true},
    category:{type:String, required:true},
    description:{type:String, required:true},
    img:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('productos', ProductSchema)