import React from 'react'
interface InputFieldDataType {
    labelName: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
export const Input = ({ labelName, type, placeholder, value, onChange }: InputFieldDataType) => {

    return (
        <div className='flex flex-col gap-1'>
            <label>{labelName}</label>
            <input className='border border-black pl-3 ' type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
