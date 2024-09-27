const userModel = {};
// const url = process.env.MONGODB_URL;
// userModel.mongoose = mongoose;
// userModel.url = url;

module.exports = (mongoose) => {
// userModel.user = (mongoose) => {
	const User = mongoose.model(
		'user',
		mongoose.Schema(
			{
				email:String,
				lastName:String,
				firstName:String,
				birthday:Date,
				favoriteColor: String
			},
			{timestamps: true}
		)
	);
	return User;
};

// module.exports = userModel;