# ToDo using Solidity, Hardhat and React

This app is provides a simple implementation of ToDo using Solidity, Hardhat and React.
##### Technology/Tools
- HardHat (for local Node and deployment) 
- Solidity (for contracts)
- React and NodeJs (for Frontend)
- Metamask (for transactions)
- VSCode (Persoanl preference)

#### Installation

This app recommends [Node.js](https://nodejs.org/) v16+ to run.

Go to root in directory. Run npm following commands for dependencies installation and run: 

```sh
npm i
npm start
```
Open new terminal and run following commands:
```sh
npx hardhat compile (This will compile Solidity contracts)
npx hardhat node (This will run Node locally)
```
Open new terminal and run following command to deploy contract:
```sh
 npx hardhat run scripts/sample-script.js --network localhost (If things will go well, you will contract address. Copy this address and replace in src/context/SmartContract/index.js line 20)
```
Now install Metamask and connect with http://localhost:8545
##### if you face any challenges in local setup. Please follow this Youtube link

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/021VzH7mqSg/0.jpg)](https://www.youtube.com/watch?v=021VzH7mqSg&ab_channel=HashLipsNFT)
#### Screenshots

###### 1.When Metamask is not installed.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/1.png)

###### 2.When you try to connect Metamask.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/2.png)

###### 3.When Metamask is connected but no data found.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/3.png)

###### 4.When you want to add new ToDo.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/4.png)

###### 5. List of Todos.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/5.png)

###### 6. Edit existing ToDo item.
![alt text](https://raw.githubusercontent.com/nikhilkrdwivedi/todo-in-solidity-with-react/master/screenshots/6.png)
##### “What is the shortest word in the English language that contains the letters: abcdef? Answer: feedback. Don’t forget that feedback is one of the essential elements of good communication.” Feel free to reach out to me for any suggestions.

### *****************************************************************************************************************
#### License

MIT

**Happy coding!😀**
