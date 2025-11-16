require("dotenv").config();
import "@nomiclabs/hardhat-ethers";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";

export default {
  networks: {
    ethMainnet: {
      url: "https://ethereum-rpc.publicnode.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    ethereumTestnet: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    bscMainnet: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    arbitrumTestnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    baseMainnet: {
      url: "https://mainnet.base.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    baseTestnet: {
      url: "https://sepolia.base.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    berachainMainnet: {
      url: "https://rpc.berachain.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    berachainTestnet: {
      url: "https://bartio.rpc.berachain.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      ethereumMainnet: `${process.env.API_KEY_ETHERSCAN_MAINNET}`,
      ethereumTestnet: `${process.env.API_KEY_ETHERSCAN_TESTNET}`,
      bscMainnet: `${process.env.API_KEY_BSCSCAN_MAINNET}`,
      bscTestnet: `${process.env.API_KEY_BSCSCAN_TESTNET}`,
      arbitrumMainnet: `${process.env.API_KEY_ARBISCAN_MAINNET}`,
      arbitrumTestnet: `${process.env.API_KEY_ARBISCAN_TESTNET}`,
      baseMainnet: `${process.env.API_KEY_BASESCAN_MAINNET}`,
      baseTestnet: `${process.env.API_KEY_BASESCAN_TESTNET}`,
      berachainMainnet: "berachain_mainnet", // apiKey is not required, just set a placeholder
      berachainTestnet: "berachain_bartio", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "ethereumMainnet",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/api",
          browserURL: "https://etherscan.io/",
        },
      },
      {
        network: "ethereumTestnet",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/",
        },
      },
      {
        network: "bscMainnet",
        chainId: 56,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: "https://bscscan.com/",
        },
      },
      {
        network: "bscTestnet",
        chainId: 97,
        urls: {
          apiURL: "https://api-testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com/",
        },
      },
      {
        network: "arbitrumMainnet",
        chainId: 42161,
        urls: {
          apiURL: "https://api.arbiscan.io/api",
          browserURL: "https://arbiscan.io/",
        },
      },
      {
        network: "arbitrumTestnet",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
      {
        network: "baseMainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org/",
        },
      },
      {
        network: "baseTestnet",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org/",
        },
      },
      {
        network: "berachainMainnet",
        chainId: 80094,
        urls: {
          apiURL: "https://rpc.berachain-apis.com",
          browserURL: "https://berascan.com/",
        },
      },
      {
        network: "berachainTestnet",
        chainId: 80084,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan",
          browserURL: "https://bartio.beratrail.io",
        },
      },
    ],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
