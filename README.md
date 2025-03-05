# Hardhat EVM Project Template

A robust template for developing and deploying Smart Contracts on EVM-compatible blockchains using Hardhat.

## Features

- TypeScript support
- Hardhat configuration ready for multiple networks
- Contract verification setup
- Testing environment
- Gas reporting
- Code coverage
- Solidity style guide enforcement
- Security analysis tools

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

## Installation

1. Clone this repository:

```bash
   git clone <repository-url>
   cd <project-name>
```

2. Install dependencies:

```bash
   npm install
   # or
   yarn install
```

## Project Structure

```bash
├── contracts/          # Smart contracts directory
├── scripts/           # Deployment and interaction scripts
├── test/             # Test files
├── hardhat.config.ts # Hardhat configuration
└── .env              # Environment variables (create this)
```

## Configuration

1. Create a `.env` file in the root directory with your configuration:

```bash
   PRIVATE_KEY=your_private_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
```

2. Configure your networks in `hardhat.config.ts`

## Compiling

```bash
# Compile contracts
npx hardhat compile
```

## Testing

Write your tests in the `test/` directory and run:

```bash
   npx hardhat test
```

## Deployment

1. Create your Smart Contracts in the `contracts/` directory
2. Create deployment & verification scripts in the `scripts/` directory
3. Deploy your contract:

```bash
   npx hardhat run scripts/deploy.ts --network <network-name>
```

## Specific Sample - Deploy Example Token

After i configure the network in hardhat.config.ts and add the private key & configured network's api key in .env, i can run the specificSample.ts to deploy the contract and verify the contract

```bash
npx hardhat run scripts/specificSample.ts --net
work berachainTestnet
```

And the output will be like this:

```shell
WARNING: You are currently using Node.js v23.6.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


Submit transactions with account: 0x5360D8952D040e1d2D3d9941485C0E4d8B2F22fF on berachainTestnet
continue (y/n/_): y
2025-02-11 15:13:39.312 ======================Deploy with 0x5360D8952D040e1d2D3d9941485C0E4d8B2F22fF on berachainTestnet======================
2025-02-11 15:13:39.315 Deploy contract Token with args: NameToken, SymbolToken
2025-02-11 15:13:39.355 1
2025-02-11 15:13:44.539 2
2025-02-11 15:13:49.996 3
2025-02-11 15:13:50.553 4
2025-02-11 15:13:50.556 Contract Token deployed at: 0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4.
- Gas Price: 0.000000002200000007
- Gas Used: 0.000000000000673112
- Transaction Fee: 0.001480846404711784
- Transaction hash: 0xb3b51142e0c7d062f9146888b2e0dd8197a2b2a27923e5f1c149c60b6725c1c0
Successfully submitted source code for contract
contracts/Token.sol:Token at 0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4
for verification on the block explorer. Waiting for verification result...

2025-02-11 15:13:57.162 error verify VerificationAPIUnexpectedMessageError: The API responded with an unexpected message.
Please report this issue to the Hardhat team.
Contract verification may have succeeded and should be checked manually.
Message: Error: contract does not exist 80084 0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4
The contract 0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4 has already been verified.
https://bartio.beratrail.io/address/0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4#code
Token: 0xf1B3B0fB7f9b3Fa044885fbb8e0CA982902909E4
```

## Some useful contracts in sample folder

### BatchSender - Send Ether to multiple addresses in one transaction

```bash
npx hardhat run scripts/sample/BatchSender.ts --network bscTestnet
```

### (Will be updated)

## Security

- Always audit your contracts before deployment
- Use well-tested libraries and patterns
- Consider using tools like Slither and Mythril for security analysis

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
