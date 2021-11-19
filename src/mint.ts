const Rareterm = require('rareterm.node')
const deepai = require('deepai')

const generateImage = async (commitMessage: string) => {
  console.log("commit message", commitMessage)
  deepai.setApiKey('ea86e381-b86b-442c-990a-fc4df98a303a')
  let resp
  try {
    resp = await deepai.callStandardApi("text2img", {
      text: `${commitMessage}`,})
  } catch (e) {
    console.log("errors", e)
  }
  return resp
}

const mint = async () => {
  const commitArgs = process.argv.slice(2, process.argv.includes('#') ? process.argv.indexOf('#') : undefined)
  const commitMessage = commitArgs.join(' ')
  const image = await generateImage(commitMessage)

  const rarepress = new Rareterm()
  await rarepress.init({ host: "https://eth.rarenet.app/v1" })

  let cid = !!image ? await rarepress.fs.add(image.output_url) : undefined

  let token = await rarepress.token.create({
    type: "ERC721",
    metadata: {
      name: `${commitMessage}`,
      description: `This is a Co-Mint-Mint for commit: ${commitMessage}`,
      image: !!image ? "/ipfs/" + cid : undefined
    }
  })

  await rarepress.fs.push(cid)
  await rarepress.fs.push(token.tokenURI)
  let receipt = await rarepress.token.send(token)

  console.log("# SENT", receipt)
  console.log(`Check your token at: https://rarible.com/token/${receipt.id}`)
}
mint()
