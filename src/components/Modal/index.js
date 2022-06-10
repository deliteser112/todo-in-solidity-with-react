import React, { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SmartContractContext } from '../../context/SmartContract';
export default function Modal({ todoItem, closeModal, isEdit, index }) {
	const { account, saveTodo, updateToDo } = useContext(SmartContractContext);
	console.log(todoItem)
	const getInitialState = (edit, todoObj) => {
		if (edit) {
			todoObj['author'] = account;
			return todoObj;
		}
		return {
			author: account,
			isCompleted: false,
			title: 'Your title',
			description: 'Your description'
		}
	}
	const [todo, setTodo] = React.useState(getInitialState(isEdit, todoItem));

	const onChangeSetValue = (field, value) => {
		setTodo((todo) => ({
			...todo,
			[field]: value
		}))
		// console.log(todo)
	}
	const actionOnTodo = async () => {
		console.log("todo: => ", index)
		if (isEdit) {
			const res = await updateToDo(index, todo);
			if (res)
				closeModal(false);
		} else {
			const res = await saveTodo(todo);
			if (res)
				closeModal(false);
		}
	}
	// const saveTodo = async () => {

	//     setTodo({...todo, account})
	//     console.log("toso ", todo)
	//     const _todo = await contract?.addToDo(todo);
	//     const data = await _todo.wait();
	//     console.log("save ",  data, todo)
	//     const a = await contract.getToDo()
	//     console.log("list ",  a)

	//     setTodoItems(data);
	//   }
	//   const updateTodo = async () => {

	//       console.log("toso ", todo)
	//     const _todo = await contract?.updateToDo(index,todo);
	//     const data = await _todo.wait();
	//     console.log("update ",  data)
	//     const a = await contract.getToDo()
	//     console.log("list ",  a)

	//     setTodoItems(data);
	//   }
	return (
		<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-overlay">
			<div className="relative my-2 w-3/4 lg:w-1/3">
				<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
					<div className="flex items-center justify-between p-3 border-b border-solid border-gray-300 rounded-t">
						<h5 className="text-xl font-semibold text-white">General Info</h5>
						<button
							className="bg-transparent border-0 text-white float-right"
							onClick={() => closeModal(false)}
						>
							<AiFillCloseCircle size={24} />
						</button>
					</div>
					<div className="relative p-3 flex-auto">
						<form className="w-full">
							<label className="block text-white text-sm font-medium my-3">
								Author
							</label>
							<input type="text" disabled className="shadow appearance-none border rounded w-full py-2 px-1  text-grey-900 bg-white" value={todo?.author} />
							<label className="block text-white text-sm font-medium my-3">
								Title
							</label>
							<input type="text" className="shadow appearance-none border rounded w-full py-2 px-1  text-grey-900" onChange={e => onChangeSetValue('title', e.target.value)} value={todo?.title} />
							<label className="block text-white text-sm font-medium my-3">
								Description
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-grey-900" onChange={e => onChangeSetValue('description', e.target.value)} value={todo?.description} />
							<label className="block text-white text-sm font-medium my-3">
								Deadline
							</label>
							<input type="datetime-local" className="shadow appearance-none border rounded w-full py-2 px-1  text-grey-900" onChange={e => onChangeSetValue('deadline', e.target.value)} value={todo?.deadline} />
							<label className="block text-white text-sm font-medium mt-3">
								Is completed?
							</label>
							<input type="checkbox" value={todo?.isCompleted} checked={todo?.isCompleted} onChange={e => onChangeSetValue('isCompleted', e.target.checked)} className="text-lg" />
						</form>
					</div>
					<div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
						<button
							className="text-red-500 background-transparent font-medium uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
							type="button"
							onClick={() => closeModal(false)}
						>
							Close
						</button>
						<button
							className="text-white bg-green-500 rounded-full font-medium uppercase text-sm px-6 py-1 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
							type="button"
							onClick={() => actionOnTodo()}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
