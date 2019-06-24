const Truffle777 = artifacts.require('Truffle777');

require('openzeppelin-test-helpers/configure')({ web3 });

const { singletons } = require('openzeppelin-test-helpers');

const name = "Truffle777";
const symbol = "T7";
const defaultOperators = [];

module.exports = async function(deployer, network, accounts) {
  const erc1820 = await singletons.ERC1820Registry(accounts[0]);

  deployer.deploy(Truffle777, name, symbol, defaultOperators);
};