const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = (await getNamedAccounts()).deployer
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contract.....")
    const transactionResponse = await fundMe.fund({
        value: ethers.parseEther("0.03"),
    })
    await transactionResponse.wait(1)
    console.log("funded...")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
