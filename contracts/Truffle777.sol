pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";

contract Truffle777 is ERC777 {
    constructor(string memory name, string memory symbol, address[] memory defaultOperators)
    ERC777(name, symbol, defaultOperators) public {
    }

}
