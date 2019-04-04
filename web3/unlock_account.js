var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.personal.unlockAccount(process.argv[2], process.argv[3], 600);
