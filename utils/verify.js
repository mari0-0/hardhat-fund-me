const { run } = require("hardhat")

const verify = async function (contractAddress, args) {
    console.log("Verifying Contract.....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verfied")
        } else {
            console.log(e)
        }
    }
}
module.exports = { verify }
