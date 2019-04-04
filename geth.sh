#!/bin/bash
geth  --rpc --rpcport 8545 --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --rpcaddr "0.0.0.0" --datadir "$PWD/eth_private_net" --nodiscover --networkid 15 console 2>> $PWD/eth_private_net/geth_err.log
