// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const uri = "https://olive-nftree.netlify.app/NFTs/json/";
  const name = "OliveNFTree";
  const symbol = "ON";
  const totalSupply = 4444;
  const cost = 1;
  const open = false;

  const GenerateNFTOnlinePresaleReveal = await hre.ethers.getContractFactory(
    "GenerateNFTOnlinePresaleReveal"
  );
  const generateNFTOnlinePresaleReveal =
    await GenerateNFTOnlinePresaleReveal.deploy(
      uri,
      name,
      symbol,
      totalSupply,
      cost,
      open
    );

  await generateNFTOnlinePresaleReveal.deployed();

  console.log(
    `GenerateNFTOnlinePresaleReveal deployed to ${generateNFTOnlinePresaleReveal.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
