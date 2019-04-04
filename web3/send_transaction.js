var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var _sendTransaction = web3.eth.sendTransaction({from: process.argv[2], to: process.argv[3], value: process.argv[4]});
console.log(_sendTransaction)
