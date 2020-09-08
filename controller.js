'use strict';

var response = require('./response');
var connection = require('./connection');

exports.users = function(req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM user where id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var age = req.body.age;

    connection.query('INSERT INTO user (firstName, lastName, age) values (?,?,?)',
    [ firstName, lastName, age ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully added user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var id = req.body.id;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var age = req.body.age;

    connection.query('UPDATE user SET firstName = ?, lastName = ?, age = ? WHERE id = ?',
    [ firstName, lastName, age, id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully edit user data!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var id = req.body.id;

    connection.query('DELETE FROM user WHERE id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully deleted user!", res)
        }
    });
};