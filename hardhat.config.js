require("@nomicfoundation/hardhat-toolbox");

const dotenv=require("dotenv");
dotenv.config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks:{
    rinkeby:{
    url: process.env.RINKEBY,
    accounts:[process.env.PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey: process.env.API_KEY,
  },
};
