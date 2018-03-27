const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const uri = require('../config/mongodb');

mongoose.connect(uri,(err)=> {
    if(err) {
        return err
    }else {
        console.log('database is connecting!')
    }
})
const notesSchema = new Schema({
    pic: Number,
    name: String,
    content: String,
    time: String
})