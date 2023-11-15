module.exports = {
  contracts_build_directory:"./src/contracts",
  networks: {
    ganache: {
      host: '172.23.16.1',
      port: 8545,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
