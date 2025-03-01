const hre = require("hardhat");

async function main() {
    const LandRegistry = await hre.ethers.getContractFactory("LandRegistry");
    const landRegistry = await LandRegistry.deploy();
    await landRegistry.waitForDeployment(); // Wait for deployment completion

    console.log(`LandRegistry deployed at: ${await landRegistry.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
