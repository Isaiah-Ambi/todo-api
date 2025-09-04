const { Schema, model } = require('mongoose');



const userSchema = new Schema({
    "name": String,
    "email": String,
    "password": String
});

const User = model('User', userSchema);

const taskSchema = new Schema({
    "title": String,
    "description": String
});

const Task = model('Task', taskSchema);

module.exports = { User, Task };