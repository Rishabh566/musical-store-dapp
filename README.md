
<a name="br1"></a> 

**Blockchain Concepts and Technologies**

***Creation of a Decentralized, web3-enabled application. (Retail-ECommerce)- Report)***


**dApp URL: [https://music-store-dapp.netlify.app/**](https://music-store-dapp.netlify.app/)**

**Presentation URL: [BlockChain-Project-Presentation-20230408_184850-Meeting**](https://studentncirl-my.sharepoint.com/:v:/r/personal/x21171203_student_ncirl_ie/Documents/Recordings/BlockChain-Project-Presentation-20230408_184850-Meeting%20Recording.mp4?csf=1&web=1&e=tr8J3p)[** ](https://studentncirl-my.sharepoint.com/:v:/r/personal/x21171203_student_ncirl_ie/Documents/Recordings/BlockChain-Project-Presentation-20230408_184850-Meeting%20Recording.mp4?csf=1&web=1&e=tr8J3p)[Recording.mp4**](https://studentncirl-my.sharepoint.com/:v:/r/personal/x21171203_student_ncirl_ie/Documents/Recordings/BlockChain-Project-Presentation-20230408_184850-Meeting%20Recording.mp4?csf=1&web=1&e=tr8J3p)**

**I. Introduction**

Blockchain is a type of data structure that keeps track of transactions in an open, secure, and decentralized way. It is

an unbroken chain of data stored in blocks that is not under the authority of any one person or organization. The

blocks store data regarding a particular transaction, such as the user ID, credit card details, delivery details, and

currency amount. The larger database where the blocks are stored is called the chain. The hash of every block is added

to the hash of every new block to establish a link between earlier and recent transactions. Each block is given a distinct

ID and encrypted using an algorithm. Users can buy headphones, speakers, or earphones in the Music Store dApp by

interacting with the smart contract and sending Sepolia ETH from the MetaMask wallet i.e. in Sepolia ETH test net.

The blockchain system confirms that the data is saved in a block, which is then encrypted and assigned a special ID.

Each block's hash is added to the hash of the next block, ensuring a secure link between earlier and more recent

transactions. Blockchain is a safe and fantastic technology because it would take an impossibly large amount of

processing power to modify even a single block.

**II. Process of Operations**

**1\. Tools Used:**

Building a dApp involves a number of distinct components and tools and can be the subject of a stand-alone article. The

the project focuses on JavaScript/NodeJS DApp built on the Ethereum platform. The following are the tools used to

create dApp:

**1. Front-end:**

**Tool:** ReactJS [2]

In order to create the user interfaces for my web application, I used ReactJS as a front-end JavaScript library.

It effectively handles state and enables the simple construction of intricate UI components.

2\. **Back-end:**

**Tool:** Solidity [6]

The object-oriented, high-level programming language Solidity is what I used to create Smart Contracts that

run on the Ethereum network. It is possible to deploy Solidity code as a bytecode on the blockchain.

**Tool:** Hardhat

In order to build, test, and deploy my Smart Contracts, I utilized Hardhat as my development environment.

For the purpose of testing, debugging, and deploying Smart Contracts, Hardhat offers a number of tools

including a local blockchain instance.

3\. **Web client libraries:**

**Tool:** Ether.js [7]

On the Ethereum blockchain, I have interacted with my smart contracts using Ether.js and spoken with end

users. As a JavaScript library, Ether.js offers a high-level API for interacting with apps built on the Ethereum

platform.

**4. Account management:**

**Tool:** MetaMask

Manage accounts and link the presently logged-in user to the blockchain, I utilized MetaMask. An add-on for

the browser called MetaMask controls user accounts and enables transaction signing.

**5. Node Provider:**

**Tool:** Infura API [1]

I have provided endpoint access to Ethereum networks using the Infura API. Developers can access Ethereum

blockchain data through Infura's API endpoint without having to run a complete node.

**6. Frameworks:**

**Tool:** Hardhat [5]

Test, debug, and deploy Smart Contracts, I used the Hardhat framework. For testing and deploying Smart

Contracts, Hardhat offers a set of tools and a local blockchain instance.

**7. Deployment:**

**Tool:** Netlify [3]



<a name="br3"></a> 

My dApp was uploaded to the cloud via Netlify, and its URL has been made public. It is straightforward to

handle environment variables, continuous integration/continuous deployment (CI/CD) pipelines, and web

application deployment with Netlify.

Overall, I built and deployed my dApp using JavaScript/NodeJS utilizing these tools on the Ethereum network.

From creating user interfaces to testing and deploying Smart Contracts, each tool had a distinct function during

the development process. The dApp was published to the cloud using Netlify and made publicly available

through URL.

8\. **3rd Party API: Coinbase.io:** I am using coinbase.io API to display the current exchange rate in dollars.

<https://www.coinbase.com/>[ ](https://www.coinbase.com/)[8]

2\. Setup and Configuration

**Setting Up the application:**

In the .zip file provided for the code do the following steps:



a. Extract .zip file.

b. Open the extracted folder and run the below command in the root directory.

<img width="322" alt="Screenshot 2023-07-18 at 20 49 27" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/57e9ee57-de45-4f95-9dfa-5075f2238d70">

c. Now go to “frontend” and run the same npm install command. It will install all the project dependencies that are recorded in the package .Json file.

<img width="411" alt="Screenshot 2023-07-18 at 20 51 32" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/345362b6-872a-438e-99b0-2e5cc2d048d5">


d. Sign Up into INFURA: <https://www.infura.io/>[ ](https://www.infura.io/)and go to Dashboard.

<img width="858" alt="Screenshot 2023-07-18 at 20 52 41" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/8d95e2fb-fa67-4080-91ec-bd554b61224b">


e. Click on “CREATE NEW API KEY” > select “WEB3 API” Network and give the name of the project and then take a not of your API KEY and ENDPOINT URL.

<img width="765" alt="Screenshot 2023-07-18 at 20 54 46" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/02ef4f47-83de-4385-8e05-f9ca8a99eeb0">


f. Above information along with the Owner MetaMask Private Key is stored as the environment variable in “.env” file.

<img width="764" alt="Screenshot 2023-07-18 at 20 56 31" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/613b936a-1877-4d55-bc9f-a71117e61d2a">


g. Compile the “music. Sol” solidity file with hardhat it will deploy the “Smart Contract” and give “Smart Contract Address” and “ABI .Json” file, which will be used by the front end and ether.js to interact with the smart contract that is deployed on the Sepolia test network.

<img width="867" alt="Screenshot 2023-07-18 at 21 16 05" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/ba3894bb-7fb1-4599-bc40-55dd1d18c401">
  
<a name="br4"></a> 

The below screenshot is for the contract deployment using hardhat.

<img width="846" alt="Screenshot 2023-07-18 at 21 18 43" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/a684f7f8-1746-4e19-bb70-9db07adfb10d">


h. Now, the configuration is done in the frontend here “App.js” so that the connecting users' MetaMask Wallet starts interacting with the underlying Smart Contract as shown below.

<img width="562" alt="Screenshot 2023-07-18 at 21 19 23" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/8a178630-9dfe-4992-a08f-a6a97cde8d61">


i. Type “npm run build” to build the source code and deploy it on Netlify.

Signup into Netlify account by going to <https://app.netlify.com/>[ ](https://app.netlify.com/)and create a site called “music-store-dApp” and give the URL link for the same.

<img width="649" alt="Screenshot 2023-07-18 at 21 20 33" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/01ca788d-4e05-4ec2-af66-61736df30755">


<a name="br5"></a> 

Drop the build file.

<img width="650" alt="Screenshot 2023-07-18 at 21 21 24" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/c055247c-a210-4373-af33-379ed1e39c22">

j. Setup your domain and upload your build folder.

<img width="656" alt="Screenshot 2023-07-18 at 21 22 16" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/7a495226-245e-4a86-875d-6587431113e0">


WEB3 dApp is live now!!!! [**https://music-store-dapp.netlify.app/**](https://music-store-dapp.netlify.app/)

**3\. Architecture:**

<img width="952" alt="Screenshot 2023-07-18 at 21 28 36" src="https://github.com/Rishabh566/musical-store-dapp/assets/46817303/1d27c498-df6d-4dc8-91f8-dc7902d95d6f">


After launching a fresh React project, the first thing I did was install the Ethers.js library, which allows connection with the blockchain. The blockchain is made up of many nodes, each of which holds a copy of the blockchain's data. My dApp required to be able to interface with one of these nodes in order to read or write any of this data these libraries give access to several modules (with methods and attributes) that can be used to communicate with Sepolia Ethereum TestNet. For example, "ethers.Wallet" is used to connect to an Ethereum wallet, while "ethers.Contract" is used to communicate with an Ethereum smart contract. The MetaMask wallet functions as a login and gateway to a DApp. Users are asked to sign in with an email address and a password in typical web apps. To enable particular functionality in the decentralized world, DApps must be granted access to a user's wallet. Metamask, which is available as a Chrome extension or a mobile app, was installed. Now that I had everything I needed, I was able to speak with the blockchain. The "middleman" — the smart contract — is then contacted. To connect to a smart contract, you must have the contract address, ABI, and a provider and/or a signer. The contract address is the contract's address on the blockchain. The ABI (Application Binary Interface) is a JSON file that gives a breakdown of each function in the contract, including any input parameters, intended output, and data types. Contract ABI is established by using HardHat to compile our "music.sol" solidity file. Both may be discovered on Etherscan, an Ethereum blockchain explorer that lets you inspect smart contracts. A DApp requires providers and signers. A smart contract can have both read and write capabilities. You will need a provider to read data from a smart contract. A signer is required to write data (i.e. to perform transactions that affect the status of the data on the blockchain). Both require a signer with a provider. I utilized Infura Node Provider to establish a provider utilizing Ethers.js's built-in Infura provider option.

“const provider = new ethers.providers.InfuraProvider('rinkeby', INFURA\_PROJECT\_ID);”

In contrast, signers are effectively an abstraction of the user's wallet address. Any writing operation to the blockchain will require you to sign the transaction. (i.e., prove that you are who you are). Finally, I constructed a contract that would be utilized throughout the application, sending in the contract address, ABI, and signer as parameters.

“const contract = new ethers.Contract(CONTRACT\_ADDRESS, CONTRACT\_ABI, provider or signer);”

With this done, I could call my smart contract function.

“const result = await contract.functionName();”

All the transactions are made, and the records are visible in sepolia etharscan under the contract address and at last the contract balance is transfered to the owners Metamask Wallet. And at last, the “build” file is updated to the cloud platform “Netlify”, and I had a URL to access my music-store-dApp. I have used Coinabase API to fetch the exchange value of few crypto currencies to USD.

**III. Conclusion**

**Key takeaways from the project:**

1\. Front-end libraries, back-end programming languages, web client libraries, providers, and frameworks are used by Web3 apps to interface with the Ethereum blockchain.

2\. MetaMask and Infura API are two essential providers that allow web3 applications to interface with blockchain smart contracts.

3\. Netlify is a cloud platform that can be used to deploy apps that employ the web3 standard.

4\. In web3 applications, end-users retain ownership of all of their data, removing the requirement for a centralized authority or an intermediary.

**IV. Bibliography/References**

[\[1\]](https://community.infura.io/t/react-js-ethers-js-demo-of-using-the-infuraprovider-vs-the-metamask-wallet-web3provider/6108)[ ](https://community.infura.io/t/react-js-ethers-js-demo-of-using-the-infuraprovider-vs-the-metamask-wallet-web3provider/6108)[*https://community.infura.io/t/react-js-ethers-js-demo-of-using-the-infuraprovider-vs-the-metamask-wallet-*](https://community.infura.io/t/react-js-ethers-js-demo-of-using-the-infuraprovider-vs-the-metamask-wallet-web3provider/6108)

[*web3provider/6108*](https://community.infura.io/t/react-js-ethers-js-demo-of-using-the-infuraprovider-vs-the-metamask-wallet-web3provider/6108)

[*\[2\]*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[Building*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[DApp*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[Frontends*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[with*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[React*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[&*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[Network.js*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[-*](https://blog.infura.io/dapp-frontend-network)[* ](https://blog.infura.io/dapp-frontend-network)[Infura*](https://blog.infura.io/dapp-frontend-network)

[*\[3\]*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[Deploying*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[React*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[apps*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[to*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[Netlify:*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[three*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[* ](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)[methods*](https://blog.logrocket.com/deploy-react-apps-netlify-3-ways/)

[*\[5\]*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[Compiling*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[your*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[contracts*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[|*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[Hardhat*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[|*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[Ethereum*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[development*](https://hardhat.org/guides/compile-contracts.html)[* ](https://hardhat.org/guides/compile-contracts.html)[environment*](https://hardhat.org/guides/compile-contracts.html)

[*\[6\]*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[How*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[to*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[develop*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[Solidity*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[smart*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[contracts*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[using*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[* ](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)[Hardhat*](https://blog.logrocket.com/develop-solidity-smart-contracts-hardhat/)

[*\[7\]*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[The*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Complete*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Guide*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[to*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Full*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Stack*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Web3*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Development*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[-*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[DEV*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[* ](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)[Community*](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-web3-development-4g74)

[*\[8\]*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[Using*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[Coinbase*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[APIs*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[|*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[Coinbase*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[* ](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)[Helpc*](https://help.coinbase.com/en/cloud/api/coinbase/using-apis)



<a name="br7"></a> 

**V. Use and Purpose of Smart Contracts**

Smart contracts are self-executing and automated digital contracts with rules and logic expressed in code. Nick Szabo proposed them as a digital transaction mechanism in the 1990s. A blockchain, which is a distributed and transparent ledger that records transactions across a network of computers, is where smart contracts are maintained. Because a transaction cannot be changed once it is recorded on the blockchain, the blockchain technology used in smart contracts assures efficiency, security, and transparency. Smart contracts do not require intermediaries like banks, attorneys, or notaries, making them more efficient, secure, and cost-effective. Smart contracts allow contracts to be executed automatically once certain logics are met, eliminating the need for intermediaries. They digitally duplicate the conditions of real-world contracts, allowing transactions between untrustworthy parties to take place without the need for direct contact or dependence on third parties. Smart contracts have several advantages over traditional contracts, including lower transaction risk, lower administration and service costs, and improved business process efficiency. They are expected to provide improved alternatives to the current transaction mechanism in a variety of industries. For e.g. there is a smart contract working between you and soda Machine.

The creation of tokens, NFTs, and applications with smart contract functionality has completely changed a number of industries, including finance, the arts, gaming, and more. The issue of confirming ownership of digital assets, which was previously vulnerable to tampering and consequently, severe losses, has been solved specifically by NFTs. A digital certificate of ownership that can be bought and sold can be created using NFTs, and a record of who owns what can be recorded on a shared ledger known as the blockchain. Due to this, exclusive ownership and asset security have been improved. In the financial industry, the use of DLT-based tokens has grown in popularity as a means of capital raising, and smart contracts have the ability to do away with middlemen and lower transaction costs. NFTs have made it possible for digital artists to make money from their work and have led to high-profile sales in the art world. In the gaming business, NFTs and smart contracts can streamline payment procedures in the building sector.

However, using blockchain-based technologies raises several ethical and social questions. The environmental impact of these technology, which can use large quantities of energy when mining cryptocurrency, is one of the key issues.

Questions about enforceable property rights and open governance are also raised by ownership and governance of the digital assets represented by NFTs. Concerns regarding the commercialisation of art and its effects on conventional notions of art ownership and value have been raised by the introduction of NFTs in the art world. Finally, despite their increased security and openness, the use of blockchain-based technology in banking raises questions about the possibility of fraud and other illegal acts.

In order to maximize the benefits of blockchain-based technology while minimizing any potential negatives, these ethical and societal challenges must be addressed.

Many businesses are looking at integrating blockchain technology into their daily operations. For instance, in order to improve interactions with public transportation, BMW is thinking about incorporating blockchain into its next fleet of electric automobiles. The potential of blockchain for better monitoring of parts and maintenance procedures is being investigated by Lufthansa Airways. In contrast, Deutsche Telekom is using smart contracts to discuss roaming rates with other telecoms firms. For example, 1) The goal of PowerLedger [(](https://www.powerledger.io/)<https://www.powerledger.io/>[ ](https://www.powerledger.io/)), an award- winning Australian business, is to hasten the shift to a carbon-free economy. The issue is prevalent in apartment buildings where tenants frequently occupy the flats, according to the company. Apartment owners face a dilemma since they might not be motivated to put in solar panels or batteries because the tenants are the ones who benefit from them. The body corporate may now accept tenant payments for their electricity bills thanks to a new solution from PowerLedger. By doing this, the tenant avoids paying the power company and instead pays the owner directly for their electricity. Additionally, any extra energy that isn't utilized while the tenant is away might be sold to a neighbour to lower their energy costs and make money for the property owner. By tokenizing assets and making it simpler to invest in solar or wind farms, this offers a mechanism that justifies the investment in the first place and could expedite sustainable energy projects. 2) Another illustration is GAMB, a blockchain-based decentralized eCommerce platform. The platform is run by the Global Alliance of Merchants on the Blockchain (GAMB), where token holders who are members of the Merchant Alliance submit rules and regulations. These recommendations are then written into smart contracts, ensuring sustainability, reliability, and openness. GAMB is designed with merchants in mind, and the merchants themselves manage its features, functioning, and fee structures through a decentralized autonomous organization. (DAO).
