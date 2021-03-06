import TruffleToken from "./contracts/TruffleToken.json";
import TruffleNFT from "./contracts/TruffleNFT.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [TruffleToken, TruffleNFT],
  events: {
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
