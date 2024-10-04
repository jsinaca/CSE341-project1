const mongodb = require('../db/connect'); 
const ObjectId = require('mongodb').ObjectId;
const db = require('../models');
const User = db.user;
const basecontroller = {}

basecontroller.getAll = async (req, res, next) => {
	//#swagger.tags=['Users']
	const result = await mongodb.getDB().db().collection('user').find();
	result.toArray((err) => {
		if (err) {
			res.status(400).json({message: err})
		}
	}).then((list) => {
		res.setHeader('Cotent-Type', 'application/json');
		res.status(200).json(list);
	})
}

basecontroller.getSingle = async (req, res, next) => {
	//#swagger.tags=['Users']
	if (!ObjectId.isValid(req.params.id)) {
		res.status(400).json('Must use a valid contact id to find a contact.')
	}
	const userId = new ObjectId(req.params.id);
	const result = await mongodb.getDB().db().collection('user').find({_id: userId});
	result.toArray((err, lists) => {
		if (err) {
			res.status(400).json({message: err})
		}
	}).then((list) => {
		res.setHeader('Cotent-Type', 'application/json');
		res.status(200).json(list[0]);
	})
}

basecontroller.createUser = async (req, res, next) => {
	//#swagger.tags=['Users']
	if (!req.body) {
		res.status(400).send({message: 'Content can not be empty!'});
		return;
	}
	const newUser = new User ({
		email:req.body.email,
		lastName:req.body.lastName,
		firstName:req.body.firstName,
		birthday:req.body.birthday,
		favoriteColor: req.body.favoriteColor
	});
	
	const response = await mongodb.getDB().db().collection('user').insertOne(newUser);
	if (response.acknowledged = true) {
		res.send({message: 'User succesfully added to database'})
	} else {
		res.status(500).json(
			response.error || "Some error occurred while creating the new user"
		);
	}
	// newUser
	// 	.save(newUser)
	// 	.then((data) => {
	// 		res.send(data);
	// 	})
	// 	.catch (err => {
	// 		res.status(500).send({
	// 			message:
	// 				err.message || "Some error occurred while creating the new user"
	// 		});
	// 	});
};

basecontroller.updateUser = async (req, res, next) => {
	//#swagger.tags=['Users']
	if (!ObjectId.isValid(req.params.id)) {
		res.status(400).json('Must use a valid contact id to update a contact.')
	}
	const userId = new ObjectId(req.params.id)
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty"
		});
	}
	
	const update = {
		email:req.body.email,
		lastName:req.body.lastName,
		firstName:req.body.firstName,
		birthday:req.body.birthday,
		favoriteColor: req.body.favoriteColor
	};

	const response = await mongodb.getDB().db().collection('user').replaceOne({_id: userId}, update);
	if (response.modifiedCount > 0) {
		res.status(204).send ({message: 'User updated succesfully'})
	} else {res.status(500).json(
		response.error || 'Error updating User with id=' + userId)
	}
};

basecontroller.deleteUser = async (req, res, next) => {
	//#swagger.tags=['Users']
	if (!ObjectId.isValid(req.params.id)) {
		res.status(400).json('Must use a valid contact id to delete a contact.')
	}
	const userId = new ObjectId(req.params.id);
	const response = await mongodb.getDB().db().collection('user').deleteOne({_id: userId});
	if (response.deletedCount  > 0) {
		res.status(204).send({message: 'User was deleted syccessfully'})
	} else {
		res.status(500).json(
			response.error || `Cannot delete User with id=${userId}. Maybe User was not found!`
		)
	}
}

module.exports = basecontroller;