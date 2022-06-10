//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract ToDo {
    struct ToDoStructure {
        string title;
        string description;
        string deadline;
        address author;
        bool isCompleted;
    }
    ToDoStructure[] public toDoList;

    function addToDo(string memory _title, string memory _description, string memory _deadline, address _author, bool _isCompleted ) external{
        toDoList.push(ToDoStructure(_title, _description, _deadline, _author, _isCompleted));
    }
    function updateToDo(uint _index, string memory _title, string memory _description, string memory _deadline, address _author, bool _isCompleted ) external {
        toDoList[_index].title = _title;
        toDoList[_index].description = _description;
        toDoList[_index].deadline = _deadline;
        toDoList[_index].author = _author;
        toDoList[_index].isCompleted = _isCompleted;
    }
    function getToDo() external view returns(ToDoStructure[] memory){
        return toDoList;
    }
}