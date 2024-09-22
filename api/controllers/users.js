const mongodb = require('../db/connect'); 
const ObjectId = require('mongodb').ObjectId;
const basecontroller = {}

basecontroller.getAll = async (req, res, next) => {
    const result = await mongodb.getDB().db().collection('user').find();
    result.toArray().then((list) => {
        res.setHeader('Cotent-Type', 'application/json');
        res.status(200).json(list);
    })
}

basecontroller.getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDB().db().collection('user').find({_id: userId});
    result.toArray().then((list) => {
        res.setHeader('Cotent-Type', 'application/json');
        res.status(200).json(list[0]);
    })
}

module.exports = basecontroller;