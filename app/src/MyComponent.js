import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

const balanceOf = data => (
  <span>
    <b>{data}</b>
  </span>
);

const totalSupply = data => (
  <span>
    <b>{data}</b>
  </span>
);

const tokenMetaData = data => {
  // fetch(data)
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data.properties.image.description);
  //     return (
  //       <span>
  //       </span>
  //     )
  //   })
};

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      const { accounts } = drizzleState;
      return (
        <div className="App">
          <div>
            <img src={logo} alt="drizzle-logo" />
            <h1>Truffle University Tokens</h1>
            <p>
              All the tokens!
            </p>
          </div>

          <div className="section">

            <h2>Your Account</h2>
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex={0}
              units="ether"
              precision={3}
              render={({ address, balance, units }) => (
                <div>
                  <div>Address: <span style={{ color: "#39DAB9" }}>{address}</span></div>
                  <div>Ether: <span style={{ color: "#39DAB9" }}>{balance}</span> {units}</div>
                </div>
              )}
            />
          </div>

          <div className="section">
            <h2>Truffle Token (ERC20)</h2>
            <p>
              <strong>Total Supply: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TruffleToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
                render={totalSupply}
              />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TruffleToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>My Balance: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TruffleToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
                render={balanceOf}
              />
            </p>
            <h3>Send Tokens</h3>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TruffleToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>

          <div className="section">
            <h2>Truffles (ERC721)</h2>
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TruffleNFT"
                method="tokenURI"
                methodArgs={[5]}
                hideIndicator
              />
          </div>

          <div className="section">
            <h2>Truffle777 (ERC777)</h2>
            <p>💵</p>
          </div>

          <div className="section">
            <h2>ERC1400</h2>
            <p>💵</p>
          </div>


        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
