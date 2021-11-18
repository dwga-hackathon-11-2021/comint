const Rareterm = require('rareterm.node')

const mint = async () => {
  console.log(process.argv)
  // 1. Initialize a rarepress object from Rareterm
  // const rarepress = new Rareterm()
  // 2. Connect to a rinkeby rarenet node
  // await rarepress.init({ host: "https://eth.rarenet.app/v1" })

  // 3. Import a web image to rarepress file system
  // let cid = await rarepress.fs.add("")

  // 4. Create and save a token on rarepress
  // let token = await rarepress.token.create({
  //   type: "ERC721",
  //   metadata: {
  //     name: "Test Minting to existing Wallet",
  //     description: "Imma just island boi",
  //     // image: "/ipfs/" + cid
  //   }
  // })

  // 5. Publish the image on public IPFS
  // await rarepress.fs.push(cid)
  // 6. Publish the metadata on public IPFS
  // await rarepress.fs.push(token.tokenURI)
  // console.log("token", token)
  // 7. Publish the token to the marketplace
  // let receipt = await rarepress.token.send(token)

  // console.log("# SENT", receipt)
  // console.log(`Check your token at: https://rarible.com/token/${receipt.id}`)
}
mint()
