import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import ToDo from '../../artifacts/contracts/ToDo.sol/ToDo.json';
export const SmartContractContext = React.createContext();
// const { ethereum } = window;


export const SmartContractProvider = ({ children }) => {
    const [walletFound, setWalletFound] = useState(false);
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [todoList, setTodoList] = useState([]);
    const initConnection = async () => {
        if (typeof window.ethereum !== "undefined") {
            setWalletFound(true);
            const account = await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const newSigner = provider.getSigner();
            setAccount(account[0]);
            console.log("account---", account);
            setContract(
                new ethers.Contract(
                    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
                    ToDo.abi,
                    newSigner
                )
            );
        } else {
            console.log("Please install Metamask.")
        }
    }
    const getToDoList = async () => {
        console.log("contract ",contract)
        const _todoList = await contract?.getToDo();
        console.log("_todoList ",_todoList);
        setTodoList(_todoList);
    }
    useEffect(() => {
        initConnection();
        getToDoList();
    }, [account]);

    const saveTodo = async ({title, description, deadline, author, isCompleted }) => {
        try {
        console.log("toso ", title, description, deadline, author, isCompleted )
        const _todo = await contract?.addToDo(title, description, deadline, author, isCompleted );
        const data = await _todo.wait();
        console.log("save ",  data)
        const _todoList = await contract.getToDo()
        setTodoList(_todoList);
        return true;
        } catch (error) {
           alert('something went wrong...', error) 
           return false;
        }
      }
      const updateToDo = async (index, {title, description, deadline, author, isCompleted }) => {
        try {
            
        console.log("toso ",index,  title, description, deadline, author, isCompleted )
        const _todo = await contract?.updateToDo(index ,title, description, deadline, author, isCompleted);
        const data = await _todo.wait();
        console.log("update ",  data)
        const _todoList = await contract.getToDo()
        setTodoList(_todoList);
        return true;
        } catch (error) {
            alert('something went wrong...', error) 
            return false;
        }
      }
    return (
        <SmartContractContext.Provider value={{ walletFound, account, contract, initConnection, saveTodo, updateToDo, todoList}}>
            {children}
        </SmartContractContext.Provider>
    )
}