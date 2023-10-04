import React from 'react'
interface modalDataType {
  isVisible: boolean,
  onClose: () => void;
  email: string,
  password: string
}

export const Modal = ({ isVisible, onClose, email, password }: modalDataType) => {
  if (!isVisible) {
    return null;
  }
  return (

    <div className='flex justify-center items-center fixed inset-0 bg-opacity-25 backdrop-blur-sm' onClick={() => onClose()}>
      <div className="w-[500px]">
        <div className='text-right pr-2' onClick={() => onClose()} role='button'>
          X
        </div>
        <div className="bg-red-50 p-5 rounded space-y-2 text-red-900 text-xl">
          <h1>Email Address:-  {email}</h1>
          <h2>Password:- {password}</h2>
        </div>
      </div>
    </div>
  )
}
