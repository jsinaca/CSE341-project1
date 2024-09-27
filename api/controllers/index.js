const mongodb = require('../db/connect'); 
const basecontroller = {}

basecontroller.getUser = async (req, res, next) => {
    const result = await mongodb.getDB().db().collection('user').find();
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list);
    })
}

// basecontroller.getUserName = async (req, res, next) => {
//     const result = await mongodb.getDB().db().collection('user').find();
//     result.toArray().then((list) => {
//         res.setHeader('Cotent-Type', 'application/json');
//         res.status(200).json(list[0].username);
//     })
// }

module.exports = basecontroller;