//------------------------------------------------------------------------------
// import packages
//------------------------------------------------------------------------------
var express = require("express");
var app = express();

var Web3 = require('web3');
var web3 = new Web3();

//------------------------------------------------------------------------------
// start a API server
//------------------------------------------------------------------------------
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//------------------------------------------------------------------------------
// start to connect to the ethereum network
//------------------------------------------------------------------------------
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

//------------------------------------------------------------------------------
// API definitions
//------------------------------------------------------------------------------
app.post('/accounts/:accountPassword', function(req, res) {
    let _password = req.params.accountPassword;
    let _account = web3.personal.newAccount(_password);
    res.send({ account: _account });
});
