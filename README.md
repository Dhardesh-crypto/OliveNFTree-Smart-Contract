# OliveNFTree Smart Contract Hardhat Project

This project comes with the OliveNFTree smart contract and a script that deploys that contract.
You'll need a .env file 

API_URL=https://polygon-mainnet.g.alchemy.com/v2/<ENTER YOUR CODE HERE IF YOU WANT TO DEPLOY ON POLYGON>
PRIVATE_KEY=<ENTER THE PRIVATE KEY OF YOUR WALLET HERE>

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

yarn hardhat run scripts/deploy.js --network arbitrumOne
```

CONTRACT_ADDRESS_POLYGON=0x678deb0fe781b9e8cecf806195efb2554f0c3490
CONTRACT_ADDRESS_ARBITRUM_GOERLI=0x487F0c373E686A2C73C880a0FaF3114ed3ABCAc0
CONTRACT_ADDRESS_ARBITRUM_ONE=0x97D480CfDA23B3B70b7E892C09CF042fcACE57D2
