# Co-Mint
## Mint on Commit!

Co-Mint is the world's first end-to-end, work-to-wage NFT service. Co-Mint allows you to create NFTs on commit, tokenizing your time into unique units called "co-mint-mints." Co-mint-mints are lazily minted to Rarible via the Rarepress#rareterm.node API, and are viewable on the Co-Mint-Mint dashboard, where the minter can track the co-mint-ments they've generated, and sell them back to their employer as unique, digital IOUs.

Users are able to import and use an existing Ethereum wallet or generate a new wallet on their first commit. Secrets are stored locally at `~/.mushie` and are removable via `rm ~/.mushie` (remember to save your seed phrase!). We highly recommend using a temporary wallet with Co-Mint for best operational security.

Rarepress is used to lazily mint to Rarible. NFTs are minted with the commit message along with a unique image generated via deepai. Minting is called on-commit using husky hooks, allowing `comint` to seamlessly integrate with any project.

Instructions:
1. Clone & Install `comint` repository into your project
2. `cd comint && npm install`
3. integrate comint commit-msg hook into your husky workflow



