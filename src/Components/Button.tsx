import { on } from 'events';
import React from 'react'
interface ButtonDataType {
    buttonName: string,
    onClick: () => void;
}

export const Button = ({ buttonName, onClick }: ButtonDataType) => {

    return (
        <div>
            <button className='bg-blue-700 rounded text-white text-lg p-2' onClick={onClick}>{buttonName}</button>
        </div>
    )
}
