const asyncHandler = require("express-async-handler");
const Song = require("../models/songModel");


const uploadSong = asyncHandler(async (req, res) => {
  
    const { songName , songTitle , songFile , songDesc} = req.body;

    try
    {
        await Song.create({songName,songTitle,songFile,songDesc})   
        res.send(true)
    }catch(e)
    {
        res.send(false)
    }
});

const fetchSong = asyncHandler(async (req, res) => {
  

    try
    {
        const song = await Song.find()   
        res.send(song)
    }catch(e)
    {
        res.send(false)
    }
});
const singleSong = asyncHandler(async (req, res) => {
    try
    {
        const song = await Song.find({_id:req.body.id})   
        res.send(song)
    }catch(e)
    {
        res.send(false)
    }
});









module.exports = {  uploadSong ,fetchSong ,singleSong  };