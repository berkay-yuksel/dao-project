const hre = require("hardhat");

async function main() {


  const Dao = await hre.ethers.getContractFactory("Dao");
  const dao = await Dao.deploy();

  await dao.deployed();

  console.log("Dao with 1 ETH deployed to:", dao.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
