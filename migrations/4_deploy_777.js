const Truffle777 = artifacts.require('Truffle777');

require('../node_modules/openzeppelin-test-helpers/configure')({ web3 });

const { singletons } = require('../node_modules/openzeppelin-test-helpers');


module.exports = async function(deployer, network, accounts) {
  const erc1820 = await singletons.ERC1820Registry(accounts[0]);

  await deployer.deploy(Truffle777);
};