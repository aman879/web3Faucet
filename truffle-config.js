const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require("fs");
const memonicPhrase = fs.readFileSync(".secret").toString().trim();
const alchemyProjectId = fs.readFileSync(".alchemy").toString().trim();
const etherscanKey = fs.readFileSync(".etherscan").toString().trim();

module.exports = {
  contracts_build_directory:"./src/contracts",
  networks: {
    ganache: {
      host: '172.23.16.1',
      port: 8545,
      network_id: '*',
    },
    sepolia: {
      provider: () => new HDWalletProvider(memonicPhrase, `https://eth-sepolia.g.alchemy.com/v2/${alchemyProjectId}`),
      network_id: 11155111,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: etherscanKey 
  }
};
