let pool = require('./conn');

function userSignIn(data) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'SELECT * FROM `users` where `email`=?';
			connection.query(sql,[data], function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);

			})
		});
	});
}
function getcontact() {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'SELECT * FROM `contact`';
			connection.query(sql, function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);

			})
		});
	});
}

function deletecontact(id) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'DELETE FROM `contact` where id ='+id;
			connection.query(sql, function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);
			})
		});
	});
}
function addContact(data) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'INSERT INTO `contact`( `firstName`, `lastName`, `email`, `message`,`number`) VALUES (?,?,?,?,?)';
			connection.query(sql,data, function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);
			})
		});
	});
}
function updateContact(data) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'UPDATE `contact` SET `firstName`=?,`lastName`=?,`email`=?,`number`=? WHERE id=?';
			connection.query(sql,data, function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);
			})
		});
	});
}
function getsinglecontact(id) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
			if (err) log(err);
			var sql = 'SELECT * FROM `contact` where id ='+id;
			connection.query(sql, function (err, result, field) {
				connection.release();
				if (err) reject(err);
				resolve(result);
			})
		});
	});
}

module.exports = {
	userSignIn,
	getcontact,
	deletecontact,
	addContact,
	getsinglecontact,
	updateContact
};