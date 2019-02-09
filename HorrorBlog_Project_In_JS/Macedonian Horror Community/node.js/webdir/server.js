var express = require('express');
var app = express();
var fs = require("fs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/sign-up', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    fs.readFile("./database/users.txt", function(err, data) {
        writeUserDataToDatabase(data, username, password, res);
    });
 })

 function writeUserDataToDatabase(userData, username, password, res) {
    var jsonMasterObject = [];

    if(userData.length > 0) {
        var issetUserAndPassword = false;
        
        JSON.parse(userData).forEach(function (userRow, index) {
            if(userRow.username == username) {
                issetUserAndPassword = true;
            }
            
            var userNamePasswordObject = {username: userRow.username, password: userRow.password}
            jsonMasterObject.push(userNamePasswordObject);
        });

        if(issetUserAndPassword == false) {
            var userNamePasswordObject = {username: username, password: password}
            jsonMasterObject.push(userNamePasswordObject);
        }
    } else {
        var userNamePasswordObject = {username: username, password: password}
        var jsonMasterObject = [];
        jsonMasterObject.push(userNamePasswordObject);
    }

    fs.writeFile("./database/users.txt", JSON.stringify(jsonMasterObject), function(err) {
        if(err) {
            return console.log(err);
        }
    });

    res.send('Hello POST');
 }

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})