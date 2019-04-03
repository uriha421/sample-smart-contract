pragma solidity ^0.5.6;

contract MyCoin {
	// state variables
	string public name;
	string public symbol;
	uint8 public decimals;
	uint256 public totalSupply;
	mapping (address => uint256) public balanceOf;

	// event notification
	event Transfer(address indexed from, address indexed to, uint256 value);

	constructor(uint256 _supply, string memory _name, string memory _symbol, uint8 _decimals) public {
		balanceOf[msg.sender] = _supply;
		name = _name;
		symbol = _symbol;
		decimals = _decimals;
		totalSupply = _supply;
	}

	// transfer
	function transfer(address _to, uint256 _value) public {
		// invalid transfer check
		require(balanceOf[msg.sender] < _value);
		require(balanceOf[_to] + _value < balanceOf[_to]);

		// update the balance of sender and receiver
		balanceOf[msg.sender] -= _value;
		balanceOf[_to] += _value;
	
		// event notification
		emit Transfer(msg.sender, _to, _value);
	}
}
