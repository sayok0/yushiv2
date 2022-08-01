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





// **************************************
//  UMEKA's CODE.  BETA TEST!
// **************************************

    // Trying to create my own "Save-file" object into mongoDB;
    app.post('/save-file', async(req,res)=>{
        // Test nr2;
        const saveExists = await savefile.exists({ saveFileID: req.body.saveFileID })
        if (saveExists) {
            console.log("Save file exists")
            return res.status(501).json({
                status: 'Failed',
                message: 'Save file exists! Please write different and try again...'
            })
        }
        // Note: This will log if field exist. But I need to stop somehow...
        // https://simplernerd.com/mongoose-id-exists/
        // Update 1: Just remember that you can use return key and return response as json, see code above!



        // My original code for jsut adding without checking value;
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



    app.put('/save-file/:saveID', async(req,res)=>{
        const filter = { saveFileID: req.params.saveID}
        //const update = {}
        const { killsCount, level, xp, coin } = req.body;
        const saveID = await savefile.findOneAndUpdate(filter, { killsCount, level, xp, coin }, {new: true})
        try {
            res.status(200).json({
                status: 'Success',
                data : {
                    saveID
                }
            })
        } catch (error) {
            console.log(error)
        }
    })








//*****************************************************************************************
// Guide from: https://codesource.io/how-to-build-a-crud-application-using-mern-stack/
// ****************************************************************************************
    app.get('/get-phone', async (req,res) => {
        const phoneNumbers = await PhoneBook.find({})
        try{
            res.status(200).json({
                status : 'Success',
                data : {
                    phoneNumbers
                }
            })
        }catch(err){
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }
    })

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

    app.patch('/update-phone/:id', async (req,res) => {
        const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
          })
        try{
            res.status(200).json({
                status : 'Success',
                data : {
                  updatedPhone
                }
              })
        }catch(err){
            console.log(err)
        }
    })



// ::::::::::::::::::::::::::::    End of comments line    ::::::::::::::::::::::::::::::::::::::::::::




















// Guide from: https://javascript.plainenglish.io/build-a-crud-application-using-express-and-mongodb-atlas-444f2a7f122b

    // get ALL data from post-model;
    app.get("/post-model", async (req, res) => {
        try {
          const posts = await postModel.find();
          res.json(posts);
        } catch (e) {
          console.log(e);
        }
      });

    // get only id from post-model;
    app.get("/post-model/:id", async (req, res) => {
        const { id } = req.params;
        try {
        const post = await postModel.findById(id);
        res.json(post);
        } catch (e) {
            res.status(500).send(e);
        }
    });

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

    app.put("/post-model/:id", async (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;
        try {
          const post = await postModel.findByIdAndUpdate(id, { title, content });
          res.json(post);
        } catch (e) {
          res.status(500).send(e);
        }
    });

    
 // Note: This guide did NOT add post-model as route. I did add it here just to easy track for each guide plus mine own.

 // ::::::::::::::::::::::::::::    End of comments line    ::::::::::::::::::::::::::::::::::::::::::::





















// :::::::::::::
// END LINES!
// :::::::::::::

    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })

})
.catch(error => console.log(error))




/*
Comments;
*/