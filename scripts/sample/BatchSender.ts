import { Deployer } from "../helper";
import hre from "hardhat";

async function main() {
  const accounts = await hre.ethers.getSigners();
  const account_num = 0;
  const confirmnum = 2;

  const account = accounts[account_num];
  const network = hre.network.name;
  console.log(
    `Submit transactions with account: ${account.address} on ${network}`
  );

  const deployer = new Deployer(account_num, confirmnum);

  const prompt = require("prompt-sync")();
  const iscontinue = prompt("continue (y/n/_): ");
  if (iscontinue !== "y") {
    console.log("end");
    return;
  }

  // Deploy BatchSender and verify contract
  const batchSender = await deployer.deployContract("BatchSender");
  await deployer.verifyContract(batchSender.address);
  console.log("BatchSender:", batchSender.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
