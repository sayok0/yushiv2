const express = require('express')
const mongoose = require('mongoose');
const savefile = require('./Model/savefile')
const PhoneBook = require('./Model/PhoneBook')
const postModel = require('./Model/postModel')
const cors = require('cors')
const app = express()
const PORT = 8080
require("dotenv").config();


app.use(cors())



let db,  // Did copy this line from mongoDB modules from yushi V1. But I din't know that mongoose module don't use db & collection
    dbPw = process.env.PW
    dbUser = process.env.USER
    dbUri = `mongodb+srv://${dbUser}:${dbPw}@umeka0.3alsj.mongodb.net/yushi?retryWrites=true&w=majority`

 

mongoose.connect(dbUri)
.then(() => {
    console.log(`Connected to yushi V2 Database`)


    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())    


    // Trying to create my own "Save-file" object into mongoDB;
    app.post('/save-file', async(req,res)=>{
        const SaveDB = new savefile(req.body)
        try {
            await SaveDB.save()
            res.status(201).json({
                status: 'Success',
                data : {
                    SaveDB
                }
            })
        } catch (error) {
            res.status(500).json({
                status: 'Failed',
                message: error
            })
        }
    })

    // Guide from: https://codesource.io/how-to-build-a-crud-application-using-mern-stack/
    app.post('/add-phone', async(req,res) => {
        const phoneNumber = new PhoneBook(req.body)
        try{
            await phoneNumber.save()
            res.status(201).json({
                status: 'Success',
                data : {
                    phoneNumber
                }
            })
        }catch(err){
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }
    })

    // Guide from: https://javascript.plainenglish.io/build-a-crud-application-using-express-and-mongodb-atlas-444f2a7f122b
    app.post("/post-model", async (req, res) => {
        const { title, content } = req.body;
        try {
          const newPost = await postModel.create({
            title,
            content,
          });
          res.json(newPost);
        } catch (e) {
          res.status(500).send(e);
        }
    });



    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })

})
.catch(error => console.log(error))