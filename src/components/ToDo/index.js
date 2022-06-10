import React, { useEffect, useContext } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import { SmartContractContext } from '../../context/SmartContract';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import Modal from '../Modal';
import NoData from './NoData';
const todoKeys = ['author', 'title', 'description', 'isCompleted', 'deadline'];
export default function RenderToDoList() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState({});
    const {todoList} = useContext(SmartContractContext);
  
    const convertData = async (data) => {
        const obj = {};
        todoKeys.forEach(key=>{
            obj[key] = data[key]
        });
        return obj;
    }
    const openModal = async (editedToDo, index) => {
        const data = await convertData(editedToDo)
        setSelectedItem(data);
        setSelectedIndex(index)
        setShowModal(!showModal);
    }
    return (
        <>
            {(todoList && todoList.length) ? (<div className='flex justify-center bg-gray-900'>
                <div className="relative overflow-x-auto w-full maxHeightForTable">
                    <table className="w-full text-sm text-left text-gray-500 text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-700 text-gray-400">
                                    Task
                                </th>
                                <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-700 text-gray-400">
                                    Deadline
                                </th>
                                <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-700 text-gray-400">
                                    Completed
                                </th>
                                <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-700 text-gray-400">
                                    Author
                                </th>
                                <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-700 text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((item, index) => (
                                <tr key={index} className="border-b bg-gray-800 border-gray-700">
                                    <td scope="row" className="px-6 py-4">
                                        <div className='text-base font-medium text-gray-300 whitespace-nowrap'>{item.title}</div>
                                        <div className='text-xs font-light text-gray-300 whitespace-nowrap'>{item.description}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.isCompleted ?
                                            <BsCheckCircleFill className='bg-green-800 hover:bg-green-500 text-green-500 hover:text-green-200 rounded-full' size={32} /> :
                                            <BsFillXCircleFill className='bg-red-900 hover:bg-red-500 text-red-400 hover:text-red-300 rounded-full' size={32} />}
                                    </td>
                                    <td className="px-6 py-4">
                                        <CopyToClipboard text={item.author}>
                                            <button className='flex items-center'>
                                            {`${item.author.substring(0, 5)}...${item.author.substring(item.author.length - 5)}`}
                                            <FaRegCopy className='ml-3' />
                                            </button>

                                        </CopyToClipboard>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className='flex items-center'>
                                            <div className='bg-slate-600 hover:bg-slate-500 text-grey-500 hover:text-gray-200 p-2 rounded-full cursor-pointer' onClick={() => openModal(item, index)}><FaPencilAlt size={18} /></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>) :
                <NoData />}
            {showModal ? (
                <>
                    <Modal todoItem={selectedItem} isEdit={true} index={selectedIndex}  closeModal={() => setShowModal(!showModal)} />
                </>
            ) : null}
        </>
    )
}
