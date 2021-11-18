const Rareterm = require('rareterm.node')
const deepai = require('deepai')

const generateImage = async (commitMessage: string) => {
  deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K')
  return await deepai.callStandardApi("text2img", {
    text: `${commitMessage}`,
});
}

const mint = async () => {
  const commitArgs = process.argv.slice(2, process.argv.includes('#') ? process.argv.indexOf('#') : undefined)
  const commitMessage = commitArgs.join(' ')
  const image = await generateImage(commitMessage)

  const rarepress = new Rareterm()
  await rarepress.init({ host: "https://eth.rarenet.app/v1" })

  let cid = image?  await rarepress.fs.add(image.output_url) : undefined

  let token = await rarepress.token.create({
    type: "ERC721",
    metadata: {
      name: `${commitMessage}`,
      description: "test passing commit message into token.create",
      image: image ? "/ipfs/" + cid : undefined
    }
  })

  await rarepress.fs.push(cid)
  await rarepress.fs.push(token.tokenURI)
  let receipt = await rarepress.token.send(token)

  console.log("# SENT", receipt)
  console.log(`Check your token at: https://rarible.com/token/${receipt.id}`)
}
mint()
