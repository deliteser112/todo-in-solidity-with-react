import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import Modal from '../Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import { SiTodoist } from 'react-icons/si';
import { MdOutlinePostAdd } from 'react-icons/md';
import { SmartContractContext } from '../../context/SmartContract';
export default function Navbar() {
  const [showModal, setShowModal] = React.useState(false);
  const {walletFound, contract, account, initConnection} = useContext(SmartContractContext);
  return (
    <>
      <nav className='bg-gray-900 p-5'>
        <div className='flex justify-between items-center'>
          <div className='text-white flex items-center'>
            <SiTodoist size={'2rem'} />
            <div className='ml-2 text-sm md:text-lg'>To-Do</div>
          </div>
          <div className='block md:flex text-white'>
            {(!account) ?
              (<button className='bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded-full' onClick={() => initConnection()}>connect to wallet</button>) :
              (
                <>
                  <button className='bg-indigo-500 hover:bg-indigo-600 px-4 py-1 my-1 md:my-0 rounded-full flex items-center md:mr-2' onClick={() => setShowModal(!showModal)}>
                    <MdOutlinePostAdd className='mr-2' />
                    Add
                  </button>
                  <CopyToClipboard text={account}>
                    <button className='bg-green-500 hover:bg-green-600 px-4 py-1 my-1 md:my-0 rounded-full flex items-center md:ml-2'>
                      <FaRegCopy className='mr-3' />

                      {`${account.substring(0, 5)}...${account.substring(account.length - 5)}`}
                    </button>

                  </CopyToClipboard>

                </>
              )}
          </div>
        </div>
      </nav>
      {!walletFound && (
        <div className='flex justify-center bg-green-200 text-green-700 p-4 my-1'>
          Please install Metamask.
        </div>
      )}
      {showModal ? (
        <>
          <Modal todoItems={{}} isEdit={false} closeModal={() => setShowModal(!showModal)} />
        </>
      ) : null}
    </>
  )
}
