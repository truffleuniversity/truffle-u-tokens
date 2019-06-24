const { expectEvent, singletons, constants } = require('openzeppelin-test-helpers');
const { ZERO_ADDRESS } = constants;

const Truffle777 = artifacts.require('Truffle777');

contract('Truffle777', function ([_, registryFunder, creator]) {
  beforeEach(async function () {
    this.erc1820 = await singletons.ERC1820Registry(registryFunder);
    this.token = await Truffle777.new({ from: creator });
  });

  it('has a name', async function () {
    (await this.token.name()).should.equal('Truffle777');
  });

  it('has a symbol', async function () {
    (await this.token.symbol()).should.equal('S7');
  });

  it('assigns the initial total supply to the creator', async function () {
    const totalSupply = await this.token.totalSupply();
    const creatorBalance = await this.token.balanceOf(creator);

    creatorBalance.should.be.bignumber.equal(totalSupply);

    await expectEvent.inConstruction(this.token, 'Transfer', {
      from: ZERO_ADDRESS,
      to: creator,
      value: totalSupply,
    });
  });
});