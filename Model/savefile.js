const mongoose = require('mongoose')

const SaveFileSchema = new mongoose.Schema({
    saveFileID : {
        type : String,
        required : true
    },
    killsCount : {
        type : Number,
        required : false,
        default : 0
    },
    level : {
        type: Number,
        required : false,
        min: 1,
        max: 20,
        default : 1
    },
    xp : {
        type: Number,
        required : false,
        default : 0
    }
})

const SaveFiles = mongoose.model('SaveFiles', SaveFileSchema)
module.exports = SaveFiles


/*
Comments;


Just playing around with Schema.
First time using this, trying to find out how to add skills & inventory Array just for fun, but don't know yet how to do it :/
When I try to write like this;

inventory : [
    {slot1: {}},
    {slot2: {}}
]

So here I did add 2 new object inside inventory Array, but If I don't insert any thing here, then it will just say: inventory : []
like empty Array, but where is my slot1 & slot2 ?



Update1;

Did found this site: https://dev.to/ialtafshaikh/building-a-crud-application-using-node-js-and-mongodb-atlas-2df5
and found one that the did use "default"
So I did replace required from true to false, and insert default : <anything here>
Thats mean I can just add saveFileID!


*/