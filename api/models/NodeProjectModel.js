'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
    
    "_id": {
        "$oid": "string"
      },
      "professionalName": {
        type: "string",
        require: 'Kindly enter your name'},
      "nameLink": { 
        "firstName": {
            type: "string",
            require: 'Kindly enter your name'},
        "url": {
            type: "string",
            require: 'Kindly enter your portfolio URL'},
      },
      "base64Image": "string",
      "firstName": {
        type: "string",
        require: 'Kindly enter your name'},
      "primaryDescription": {
        type: "string",
        require: 'Kindly enter your primary description'},
      "workDescription1": {
        type: "string",
        require: 'Kindly enter your job description'},
      "linkTitleText": {
        type: "string",
        require: 'Kindly enter a description for your linkedIn'},
      "linkedInLink": {
        "link": {
            type: "string",
            require: 'Kindly enter your linkedIn URL'},
        "text": "LinkedIn"
      },
      "githubLink": {
        "link": {
            type: "string",
            require: 'Kindly enter your gitHube URL'},
        "text": "GitHub"
      },
      "contactText": {
        type: "string",
        require: 'Kindly enter your name'},
})

module.exports = mongoose.model('Task', TaskSchema);